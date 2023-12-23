import StyledPosition from "../../../components/styled/StyledPosition";
import Coordinates from "./Coordinates";
import ViewportDraggable from "./ViewportDraggable";
import { useViewport } from "../context/Viewport.context";
import { useEffect } from "react";
import Grid from "../../../components/Grid";

const Viewport = () => {
  const { state: viewportState, actions: viewportActions } = useViewport();

  // FIXME: this must be removed. Only used for developing
  useEffect(() => {
    viewportActions.addPill("testing", { x: 0, y: 0 });
    viewportActions.addPill("testing2", { x: 30, y: 100 });
    viewportActions.addPill("testing3", { x: 20, y: 50 });
  }, []);

  return (
    <Grid>
      <ViewportDraggable />

      {
        Object.keys(viewportState.elements).map((key) => {
          return viewportState.elements[key].element;
        })
      }

      <StyledPosition bottom="0" right="0">
        <Coordinates />
      </StyledPosition>
    </Grid>
  );
};

export default Viewport;
