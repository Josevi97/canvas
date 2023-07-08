import StyledFlex from "../../../../components/styled/StyledFlex";
// import ViewportCanvas from "../components/ViewportCanvas";
import ViewportHeader from "./ViewportHeader";

/** TODO: React does not recognize flexDirection.
 * https://stackoverflow.com/questions/69730364/what-is-the-purpose-of-shouldforwardprop-option-in-styled
 *
 */
const Viewport = () => {
  return (
    <StyledFlex flexDirection="column">
      <ViewportHeader />
      {/* <ViewportCanvas /> */}
    </StyledFlex>
  );
};

export default Viewport;
