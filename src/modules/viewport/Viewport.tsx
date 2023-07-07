import StyledFlex from "../../components/styled/StyledFlex";
import ViewportCanvas from "./ViewportCanvas";
import ViewportHeader from "./ViewportHeader";

const Viewport = () => {
  return (
    <StyledFlex flexDirection="column">
      <ViewportHeader />
      <ViewportCanvas />
    </StyledFlex>
  );
};

export default Viewport;
