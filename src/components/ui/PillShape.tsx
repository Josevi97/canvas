import StyledContainer from "../styled/StyledContainer";
import StyledPadding from "../styled/StyledPadding";
import PillUtils from "../../modules/render/utils/PillUtils";
import { RenderUtils } from "../../modules/render/utils/RenderUtils";

type PillShapeProps = {
  children?: React.ReactNode,
}

const PillShape = (props: PillShapeProps) => {
  return (
    <StyledContainer
      backgroundColor={RenderUtils.colors.white}
      border={PillUtils.border.style}
      borderRadius={PillUtils.border.radius}>
      <StyledPadding padding={PillUtils.padding}>
        {
          props.children
        }
      </StyledPadding>
    </StyledContainer>
  );
};

export default PillShape;
