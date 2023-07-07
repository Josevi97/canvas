import StyledContainer from "../../../components/styled/StyledContainer";
import StyledPadding from "../../../components/styled/StyledPadding";
import CanvasPositioned from "./CanvasPositioned";

type PillBoxPros = {
  children: React.ReactNode,
  position: Position,
};

const PillBox = (props: PillBoxPros) => {
  return (
    <CanvasPositioned position={props.position}>
    {
      <StyledContainer width="fit-content" border="1px solid red">
        <StyledPadding padding={"10px"}>
          {
            props.children
          }
        </StyledPadding>
      </StyledContainer>
    }
    </CanvasPositioned>
  );
};

export default PillBox;
