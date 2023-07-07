import StyledContainer from "../../../components/styled/StyledContainer";
import StyledFlex from "../../../components/styled/StyledFlex";
import StyledPadding from "../../../components/styled/StyledPadding";
import { useCamera } from "../../camera/context/Camera.context";

const Coordinates = () => {
  const { state: cameraState } = useCamera();

  return (
    <StyledPadding padding="30px">
      <StyledFlex flexDirection="column" gap="10px">
        <StyledContainer backgroundColor="none">
          {
            `x: ${cameraState.position.x}`
          }
        </StyledContainer>
        <StyledContainer backgroundColor="none">
          {
            `y: ${cameraState.position.y}`
          }
        </StyledContainer>
      </StyledFlex>
    </StyledPadding>
  );
};

export default Coordinates;
