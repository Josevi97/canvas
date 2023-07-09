const CameraUtils = {
  fixPosition: ({ x, y }: Position): Position => {
    return {
      x: window.screen.width / 2 - x,
      y: window.screen.height / 2 - y,
    };
  }
};

export default CameraUtils;
