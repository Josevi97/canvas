import { useState } from "react";
import StyledEvents from "../../../components/styled/StyledEvents";
import { useCamera } from "../../camera/context/Camera.context";
import Selection from "../../selection/components/Selection";
import usePanning from "../hooks/usePanning";

type ViewportDraggableProps = {
  children?: React.ReactNode,
}

const ViewportDraggable = (props: ViewportDraggableProps) => {
  const { actions: cameraActions } = useCamera();
  // const [mousePos, setMousePos] = useState<Position>();

  const { mousedown, mouseup } = usePanning((position) => cameraActions.pane(position));

  return (
    <>
      <StyledEvents
        onMouseDown={mousedown}
        onMouseUp={mouseup}
        {...props}>


      </StyledEvents>

      {
        props.children
      }

      {/* <Selection position={currentPos} mousePos={mousePos} /> */}
    </>
  );
};

export default ViewportDraggable;
