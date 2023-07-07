import StyledContainer from "../../../components/styled/StyledContainer";
import PillBox from "./PillBox";
import StyledPosition from "../../../components/styled/StyledPosition";
import Coordinates from "./Coordinates";
import usePanning from "../hooks/usePanning";

const ViewportCanvas = () => {
  usePanning();

  return (
    <StyledContainer width="100%" flexGrow={1}>
      <PillBox position={{ x: 0, y: 0 }}>
        Testing1
      </PillBox>
      <PillBox position={{ x: 100, y: 50 }}>
        Testing2
      </PillBox>
      <PillBox position={{ x: 30, y: 100 }}>
        Testing3
      </PillBox>

      <StyledPosition bottom="0" right="0">
        <Coordinates />
      </StyledPosition>
    </StyledContainer>
  );
};

export default ViewportCanvas;
