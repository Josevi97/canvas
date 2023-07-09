import StyledContainer from "../../../components/styled/StyledContainer";
import StyledPadding from "../../../components/styled/StyledPadding";
import ViewportPositioned from "../../viewport/components/ViewportPositioned";
import { useViewport } from "../../viewport/context/Viewport.context";
import ViewportLimits from "../../viewport/components/ViewportLimits";
import PillShape from "../../../components/ui/PillShape";

type PillPros = {
  _key: string,
};

const Pill = (props: PillPros) => {
  const { state: viewportState } = useViewport();
  const viewportElement = viewportState.elements[props._key];

  return (
    <ViewportPositioned position={viewportElement.data.position}>
    {
      <ViewportLimits _key={props._key}>
        <PillShape>
          {
            viewportElement.data.name
          }
        </PillShape>
      </ViewportLimits>
    }
    </ViewportPositioned>
  );
};

export default Pill;
