import StyledEvents from "../../../components/styled/StyledEvents";
import { useCamera } from "../../camera/context/Camera.context";
import usePanning from "../hooks/usePanning";

type ViewportDraggableProps = {
  children?: React.ReactNode,
}

const ViewportDraggable = (_: ViewportDraggableProps) => {
  const { actions: cameraActions } = useCamera();

  const { mousedown, mouseup } = usePanning({
    onLeftClick: (position) => cameraActions.pane(position),
  });

  return <StyledEvents onMouseDown={mousedown} onMouseUp={mouseup} />;
};

export default ViewportDraggable;
