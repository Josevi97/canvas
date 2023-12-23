import ViewportPositioned from "../../viewport/components/ViewportPositioned";
import { useViewport } from "../../viewport/context/Viewport.context";
import PillShape from "../../../components/ui/shapes/PillShape";
import Header from "./Header";

type PillPros = {
  id: string,
};

const Pill = (props: PillPros) => {
  const { state: viewportState } = useViewport();
  const viewportElement = viewportState.elements[props.id];

  return (
    <ViewportPositioned position={viewportElement.data.position}>
    {
      <PillShape>
        <Header>
          {
            viewportElement.data.name
          }
        </Header>
      </PillShape>
    }
    </ViewportPositioned>
  );
};

export default Pill;
