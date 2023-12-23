import { useEffect, useRef } from "react";
import { useViewport } from "../context/Viewport.context";

type ViewportLimits = {
  children?: React.ReactNode,
  id: string,
}

const ViewportLimits = (props: ViewportLimits) => {
  const { actions: viewportActions } = useViewport();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();
    viewportActions.updateLimits(props.id, { width, height });

  }, [ref, props, viewportActions]);

  return (
    <div ref={ref}>
      {
        props.children
      }
    </div>
  );
};

export default ViewportLimits;
