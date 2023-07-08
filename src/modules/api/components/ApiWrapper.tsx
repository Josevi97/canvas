import { useEffect } from "react";
import { useViewport } from "../../viewport/context/Viewport.context";

type ApiWrapperProps = {
  children?: React.ReactNode,
}

const ApiWrapper = (props: ApiWrapperProps) => {
  const { actions } = useViewport();

  useEffect(() => {
    window.addPill = (text: string, position: Position) => {
      actions.addPill(text, position);
    };

    window.destroyPill = (text: string) => {
      actions.destroyPill(text);
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    props.children
  );
};

export default ApiWrapper;
