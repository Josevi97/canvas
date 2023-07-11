import { useCamera } from "../../modules/camera/context/Camera.context";
import StyledBackground from "../styled/StyledBackground";

type GridProps = {
  children?: React.ReactNode,
}

const Grid = (props: GridProps) => {
  const { state: cameraState } = useCamera();

  const position: Position = {
    x: cameraState.position.x,
    y: cameraState.position.y,
  };

  return (
    <StyledBackground
      backgroundImage={"url(\"vector-pattern.png\")"}
      backgroundSize="400px"
      backgroundPosition={`${position.x}px ${position.y}px`}
      backgroundRepeat="repeat">
      {
        props.children
      }
    </StyledBackground>
  );
};

export default Grid;
