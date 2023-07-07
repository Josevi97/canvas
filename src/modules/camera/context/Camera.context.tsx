import { createContext, useContext, useReducer } from "react";

type CameraProps = {
  children: React.ReactNode,
}

type CameraState = {
  position: Position
}

type CameraActions = {
  type: "panning"
  payload: { position: Position }
}

type Context = {
  state: CameraState,
  actions: {
    pane(position: Position): void,
  },
};

const initialState: CameraState = {
  position: {
    x: 0,
    y: 0,
  }
};

const reducer = (state: CameraState, action: CameraActions): CameraState => {
  switch (action.type) {
    case "panning":
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
    }
  }
});

const CameraProvider = (props: CameraProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const pane = ({ x, y }: Position) => {
    const position: Position = {
      x: state.position.x - x,
      y: state.position.y - y,
    };

    dispatch({ type: "panning", payload: { position } });
  };

  const context = {
    state,
    actions: {
      pane
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
