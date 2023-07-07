import StyledContainer from "../../components/styled/StyledContainer";
import GenericButton from "../../components/ui/GenericButton";

import cursor from "../../assets/icons/cursor-icon.svg";
import moveCursor from "../../assets/icons/move-arrows-icon.svg";

const boundaries: BoundaryType = {
  height: "70px",
};

const headerStyles: StylesType = {
  ...boundaries,
  borderBottom: "1px solid #cccccc",
};

const ViewportHeader = () => {
  return (
    <StyledContainer styles={headerStyles}>
      <GenericButton type="default" onClick={() => console.log("works")} width={boundaries.height}>
        <img width={22} src={cursor} />
      </GenericButton>
      <GenericButton type="default" onClick={() => console.log("works")} width={boundaries.height}>
        <img width={30} src={moveCursor} />
      </GenericButton>
    </StyledContainer>
  );
};

export default ViewportHeader;
