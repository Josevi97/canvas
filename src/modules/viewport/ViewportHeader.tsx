import StyledContainer from "../../components/styled/StyledContainer";
import GenericButton from "../../components/ui/GenericButton";

import cursor from "../../assets/icons/cursor-icon.svg";
import moveCursor from "../../assets/icons/move-arrows-icon.svg";

const ViewportHeader = () => {
  return (
    <StyledContainer>
      <GenericButton type="default" onClick={() => console.log("works")} width="70px">
        <img width={22} src={cursor}></img>
      </GenericButton>
      <GenericButton type="default" onClick={() => console.log("works")} width="70px">
        <img width={30} src={moveCursor}></img>
      </GenericButton>
    </StyledContainer>
  );
};

export default ViewportHeader;
