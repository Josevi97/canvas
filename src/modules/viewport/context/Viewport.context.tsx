import { createContext, useContext, useReducer } from "react";
import Pill from "../../render/components/Pill";
import { Context, StringViewportElement, ViewportAction, ViewportElement, ViewportElementData, ViewportState } from "./Viewport.types";

const initialState: ViewportState = {
  elements: {},
  limits: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
};

const reducer = (state: ViewportState, action: ViewportAction): ViewportState => {
  switch (action.type) {
    case "add_element": {
      const elements = { ...state.elements };

      return {
        ...state,
        elements: {
          ...elements,
          [action.payload.key]: action.payload.element,
        },
      };
    }
    /**
     * TODO: This may cause unexpected behaviours as soon as limits
     * are not being updated
     */
    case "update_element": {
      const key = action.payload.key;
      const data = action.payload.data;

      const element = { ...state.elements[key].element, };
      const elements: StringViewportElement = {
        ...state.elements,
        [key]: {
          element,
          data
        }
      };

      return { ...state, elements, };
    }
    case "destroy_element": {
      const elements = { ...state.elements };
      delete elements[action.payload.key];

      return {
        ...state,
        elements: elements,
      };
    }
    case "set_limits":
      return { ...state, limits: action.payload.limits };
    default:
      throw Error("Unknown action type");
  }
};

const ViewportContext = createContext<Context>({
  state: initialState,
  actions: {
    addPill: () => {
      throw new Error("Function not implemented.");
    },
    updateElement: () => {
      throw new Error("Function not implemented.");
    },
    destroyElement: () => {
      throw new Error("Function not implemented.");
    },
    updateLimits: () => {
      throw new Error("Function not implemented.");
    }
  }
});

type ViewportProviderProps = {
  children?: React.ReactNode,
}

const ViewportProvider = (props: ViewportProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPill = (text: string, position: Position) => {
    const key = `${text}_pill`;
    const element: ViewportElement = {
      data: {
        name: text,
        position: position,
      },
      element: <Pill key={key} id={key} />,
    };

    dispatch({ type: "add_element", payload: { key, element } });
  };

  const updateElement = (key: string, data: ViewportElementData) => {
    dispatch({ type: "update_element", payload: { key, data, }});
  };

  const destroyElement = (key: string) => {
    dispatch({ type: "destroy_element", payload: { key } });
  };

  const updateLimits = (key: string, size: Size) => {
    const { position } = state.elements[key].data;

    // TODO: Not working
    const top = Math.min(state.limits.top, position.y);
    const bottom = Math.max(state.limits.bottom, position.y + size.height);
    const left = Math.min(state.limits.left, position.x);
    const right = Math.max(state.limits.right, position.x + size.width);

    if (
      top !== state.limits.top ||
      bottom !== state.limits.bottom ||
      left !== state.limits.left ||
      right !== state.limits.right) {
      dispatch({
        type: "set_limits",
        payload: {
          limits: {
            top,
            right,
            bottom,
            left
          }
        }
      });
    }
  };

  const context: Context = {
    state,
    actions: {
      addPill,
      updateElement,
      destroyElement,
      updateLimits,
    }
  };

  return (
    <ViewportContext.Provider value={context}>
      {
        props.children
      }
    </ViewportContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useViewport = () => useContext(ViewportContext);

export default ViewportProvider;
