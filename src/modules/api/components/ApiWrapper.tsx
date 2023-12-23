import { useEffect } from "react";
import { useViewport } from "../../viewport/context/Viewport.context";
import { useCamera } from "../../camera/context/Camera.context";
import CameraUtils from "../../camera/utils/CameraUtils";

type ApiWrapperProps = {
  children?: React.ReactNode,
}

const ApiWrapper = (props: ApiWrapperProps) => {
  const { state: viewportState, actions: viewportActions } = useViewport();
  const { actions: cameraActions } = useCamera();

  useEffect(() => {
    window.addPill = (text: string, position: Position) => {
      viewportActions.addPill(text, position);
    };

    window.destroyPill = (key: string) => {
      viewportActions.destroyElement(key);
    };
  }, []);

  useEffect(() => {
    window.centrateCamera = () => {
      const { top, right, bottom, left } = viewportState.limits;

      const x = Math.abs(left - right) / 2;
      const y = Math.abs(top - bottom) / 2;

      cameraActions.moveTo(CameraUtils.fixPosition({ x, y }));
    };
  }, [viewportState]);

  return (
    props.children
  );
};

export default ApiWrapper;
