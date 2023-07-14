import { useEffect, useState } from "react";

type PanningProps = {
  onLeftClick?(position: Position): void;
  onCenterClick?(position: Position): void;
  onRightClick?(position: Position): void;
}

type ButtonType = "LEFT" | "CENTER" | "RIGHT";

const buttonTypeMapped: ButtonType[] = ["LEFT", "CENTER", "RIGHT"];

const usePanning = ({ onLeftClick, onCenterClick, onRightClick }: PanningProps) => {
  const [data, setData] = useState<{
    position: Position,
    buttonType: ButtonType
  } | null>();

  const callback = (): ((position: Position) => void) => {
    const aux = () => {
      return;
    };

    if (!data) return aux;

    switch (data.buttonType) {
      case "LEFT":
        return onLeftClick || aux;
      case "CENTER":
        return onCenterClick || aux;
      case "RIGHT":
        return onRightClick || aux;
    }
  };

  const mousemove = (event: MouseEvent) => {
    if (!data) return;

    const position = {
      x: data.position.x - event.screenX,
      y: data.position.y - event.screenY,
    };

    const clb = callback();
    clb(position);
  };

  const mousedown = (event: React.MouseEvent) => {
    const position: Position = {
      x: event.screenX,
      y: event.screenY,
    };

    setData({
      position,
      buttonType: buttonTypeMapped[event.button],
    });
  };

  const mouseup = () => {
    setData(null);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mousemove);

    return () => window.removeEventListener("mousemove", mousemove);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    currentPos: data?.position,
    mousedown,
    mouseup,
  };
};

export default usePanning;
