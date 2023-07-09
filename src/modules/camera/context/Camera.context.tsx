import { createContext, useContext, useReducer } from "react";
import { CameraActions, CameraState, Context } from "./Camera.types";

const initialState: CameraState = {
  position: {
    x: 0,
    y: 0,
  }
};

const reducer = (state: CameraState, action: CameraActions): CameraState => {
  switch (action.type) {
    case "set_position":
      return { ...state, ...action.payload};
    default:
      throw Error("Unknown action type");
  }
};

const CameraContext = createContext<Context>({
  state: initialState,
  actions: {
    pane: () => {
      throw new Error("Function not implemented.");
    },
    moveTo: () => {
      throw new Error("Function not implemented.");
    }
  }
});

type CameraProps = {
  children: React.ReactNode,
}

const CameraProvider = (props: CameraProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const pane = ({ x, y }: Position) => {
    const position: Position = {
      x: state.position.x - x,
      y: state.position.y - y,
    };

    dispatch({ type: "set_position", payload: { position } });
  };

  const moveTo = (position: Position) => {
    dispatch({ type: "set_position", payload: { position } });
  };

  const context = {
    state,
    actions: {
      pane,
      moveTo,
    }
  };

  return (
    <CameraContext.Provider value={context}>
      {
        props.children
      }
    </CameraContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCamera = () => useContext(CameraContext);

export default CameraProvider;
