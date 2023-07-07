import { useCamera } from "../../camera/context/Camera.context";
import StyledPosition from "../../../components/styled/StyledPosition";

type CanvasPositionedProps = {
  children: React.ReactNode,
  position: Position,
};

const CanvasPositioned = (props: CanvasPositionedProps) => {
  const { state: cameraState } = useCamera();

  const position: Position = {
    x: props.position.x + cameraState.position.x,
    y: props.position.y + cameraState.position.y,
  };

  return (
    <StyledPosition left={`${position.x}px`} top={`${position.y}px`} >
      {
        props.children
      }
    </StyledPosition>
  );
};

export default CanvasPositioned;
