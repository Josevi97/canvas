import { useEffect, useState } from "react";
import { useCamera } from "../../camera/context/Camera.context";

const usePanning = () => {
  const { actions: cameraActions } = useCamera();
  const [initialPos, setInitialPos] = useState<Position | null>();

  const mousemove = (event: MouseEvent) => {
    if (!initialPos) return;

    const x = initialPos.x - event.screenX;
    const y = initialPos.y - event.screenY;

    cameraActions.pane({ x, y }) ;
  };

  const mousedown = (event: MouseEvent) => {
    const position: Position = {
      x: event.screenX,
      y: event.screenY,
    };

    setInitialPos(position);
  };

  const mouseup = () => {
    setInitialPos(null);
  };

  useEffect(() => {
    window.addEventListener("mousedown", mousedown);
    window.addEventListener("mouseup", mouseup);

    return () => {
      window.removeEventListener("mousedown", mouseup);
      window.removeEventListener("mouseup", mouseup);
    };
  // TODO: This is being marked as warning
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mousemove);

    return () => window.removeEventListener("mousemove", mousemove);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPos]);
};

export default usePanning;
