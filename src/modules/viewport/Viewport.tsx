import StyledFlex, { StyledFlexProps } from "../../components/styled/StyledFlex";
import ViewportCanvas from "./ViewportCanvas";
import ViewportHeader from "./ViewportHeader";

const viewportStyes: StyledFlexProps = {
  flexDirection: "column",
};

const Viewport = () => {
  return (
    <StyledFlex styles={viewportStyes}>
      <ViewportHeader />
      <ViewportCanvas />
    </StyledFlex>
  );
};

export default Viewport;
