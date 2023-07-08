import StyledContainer from "../../../components/styled/StyledContainer";
import StyledPadding from "../../../components/styled/StyledPadding";
import ViewportPositioned from "../../viewport/components/ViewportPositioned";

type PillPros = {
  children: React.ReactNode,
  position: Position,
};

const Pill = (props: PillPros) => {
  return (
    <ViewportPositioned position={props.position}>
    {
      <StyledContainer width="fit-content" border="1px solid red">
        <StyledPadding padding={"10px"}>
          {
            props.children
          }
        </StyledPadding>
      </StyledContainer>
    }
    </ViewportPositioned>
  );
};

export default Pill;
