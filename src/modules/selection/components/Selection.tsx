import StyledContainer from "../../../components/styled/StyledContainer";
import StyledOpacity from "../../../components/styled/StyledOpacity";
import StyledPosition from "../../../components/styled/StyledPosition";

type SelectionProps = {
  position: Position | null | undefined,
  mousePos: Position | null | undefined,
}

const Selection = (props: SelectionProps) => {
  if (!props.position) return <></>;

  return (
    <StyledPosition top="0" left="0">
      <StyledOpacity opacity={0.3}>
        <StyledContainer backgroundColor="red" />
      </StyledOpacity>
    </StyledPosition>
  );
};

export default Selection;
