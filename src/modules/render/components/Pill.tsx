import ViewportPositioned from "../../viewport/components/ViewportPositioned";
import { useViewport } from "../../viewport/context/Viewport.context";
import ViewportLimits from "../../viewport/components/ViewportLimits";
import PillShape from "../../../components/ui/shapes/PillShape";

type PillPros = {
  id: string,
};

const Pill = (props: PillPros) => {
  const { state: viewportState } = useViewport();
  const viewportElement = viewportState.elements[props.id];

  return (
    <ViewportPositioned position={viewportElement.data.position}>
    {
      <ViewportLimits id={props.id}>
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
