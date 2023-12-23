import { useEffect, useState } from "react";

type ButtonType = "LEFT" | "CENTER" | "RIGHT";

type PanningProps = {
  onLeftClick?(position: Position): void;
  onCenterClick?(position: Position): void;
  onRightClick?(position: Position): void;
}

const buttonTypeMapped: ButtonType[] = ["LEFT", "CENTER", "RIGHT"];

const usePanning = ({
  onLeftClick = () => {},
  onCenterClick = () => {},
  onRightClick = () => {}
}: PanningProps) => {
  const [data, setData] = useState<{ position: Position, buttonType: ButtonType } | null>(null);

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

  const mouseup = () => setData(null);

  useEffect(() => {
    if (!data) return;

    const onClicks = {
      "LEFT": onLeftClick,
      "CENTER": onCenterClick,
      "RIGHT": onRightClick,
    };

    const mousemove = (event: MouseEvent) => {
      const position = {
        x: data.position.x - event.screenX,
        y: data.position.y - event.screenY,
      };

      const onClick = onClicks[data.buttonType];
      onClick(position);
    };

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, [data]);

  return {
    currentPos: data?.position,
    mousedown,
    mouseup,
  };
};

export default usePanning;
