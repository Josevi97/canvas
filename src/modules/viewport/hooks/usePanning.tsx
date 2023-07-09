import { useEffect, useState } from "react";

const usePanning = ( callback: (position: Position) => void ) => {
  const [initialPos, setInitialPos] = useState<Position | null>();

  const mousemove = (event: MouseEvent) => {
    if (!initialPos) return;

    const position = {
      x: initialPos.x - event.screenX,
      y: initialPos.y - event.screenY,
    };

    callback(position);
  };

  const mousedown = (event: React.MouseEvent) => {
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
    window.addEventListener("mousemove", mousemove);

    return () => window.removeEventListener("mousemove", mousemove);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPos]);

  return {
    currentPos: initialPos,
    mousedown,
    mouseup,
  };
};

export default usePanning;
