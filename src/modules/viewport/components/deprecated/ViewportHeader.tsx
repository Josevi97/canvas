import StyledContainer from "../../../../components/styled/StyledContainer";
import GenericButton from "../../../../components/ui/deprecated/GenericButton";

import cursor from "../../../assets/icons/cursor-icon.svg";
import moveCursor from "../../../assets/icons/move-arrows-icon.svg";

const boundaries: BoundaryType = {
  width: "100%",
  height: "70px",
};

const ViewportHeader = () => {
  return (
    <StyledContainer
      {...boundaries}
      zIndex={1}
      backgroundColor="white"
      borderBottom="1px solid #cccccc">
      <GenericButton type="default"  width={boundaries.height}>
        <img width={22} src={cursor} />
      </GenericButton>
      <GenericButton type="default" width={boundaries.height}>
        <img width={30} src={moveCursor} />
      </GenericButton>
    </StyledContainer>
  );
};

export default ViewportHeader;
