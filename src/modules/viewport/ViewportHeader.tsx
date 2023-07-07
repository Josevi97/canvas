import StyledContainer from "../../components/styled/StyledContainer";
import GenericButton from "../../components/ui/GenericButton";

import cursor from "../../assets/icons/cursor-icon.svg";
import moveCursor from "../../assets/icons/move-arrows-icon.svg";

const boundaries: BoundaryType = {
  height: "70px",
};

const ViewportHeader = () => {
  return (
    <StyledContainer {...boundaries} borderBottom="1px solid #cccccc">
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
