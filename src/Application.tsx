import Viewport from "./modules/viewport/components/Viewport";
import "./Application.scss";

import CameraProvider from "./modules/camera/context/Camera.context";

const Application = () => {
  return (
    <CameraProvider>
      <Viewport />
    </CameraProvider>
  );
};

export default Application;
