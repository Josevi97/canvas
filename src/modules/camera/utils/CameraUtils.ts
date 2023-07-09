const CameraUtils = {
  limits: {
    min: 0.4,
    max: 4,
  },

  fixPosition: ({ x, y }: Position): Position => {
    return {
      x: window.screen.width / 2 - x,
      y: window.screen.height / 2 - y,
    };
  }
};

export default CameraUtils;
