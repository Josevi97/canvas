import { createContext, useContext, useReducer } from "react";
import Pill from "../../render/components/Pill";

type ViewportProviderProps = {
  children?: React.ReactNode,
}

type StringJSX = {
  [key: string]: JSX.Element
}

type ViewportState = {
  elements: StringJSX
}

type ViewportAction = {
  type: "add_element",
  payload: { key: string, element: JSX.Element }
} |
{
  type: "destroy_element"
  payload: { key: string }
}

type Context = {
  state: ViewportState,
  actions: {
    addPill(text: string, position: Position): void,
    destroyPill(text: string): void,
  }
}

const initialState: ViewportState = {
  elements: {},
};

const reducer = (state: ViewportState, action: ViewportAction): ViewportState => {
  switch (action.type) {
    case "add_element":
      return {
        ...state,
        elements: {...state.elements,
          [action.payload.key]: action.payload.element,
        },
      };
    case "destroy_element": {
      const elements = state.elements;
      delete elements[action.payload.key];

      return {
        ...state,
        elements: elements,
      };
    }
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
    destroyPill: () => {
      throw new Error("Function not implemented.");
    }
  }
});

const ViewportProvider = (props: ViewportProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPill = (text: string, position: Position) => {
    const key = `${text}_pill`;
    const element = <Pill key={key} position={position}>{text}</Pill>;

    dispatch({ type: "add_element", payload: { key, element } });
  };

  const destroyPill = (text: string) => {
    const key = `${text}_pill`;

    dispatch({ type: "destroy_element", payload: { key } });
  };

  const context: Context = {
    state,
    actions: {
      addPill,
      destroyPill,
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

export default ViewportProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useViewport = () => useContext(ViewportContext);
