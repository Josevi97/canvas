import "./Application.scss";

import CameraProvider from "./modules/camera/context/Camera.context";
import Viewport from "./modules/viewport/components/Viewport";
import ApiWrapper from "./modules/api/components/ApiWrapper";
import ViewportProvider from "./modules/viewport/context/Viewport.context";

const Application = () => {
  return (
    <CameraProvider>
      <ViewportProvider>
        {/* TODO: Selection Provider must provided here to be accesible */}
        <ApiWrapper>
          <Viewport />
        </ApiWrapper>
      </ViewportProvider>
    </CameraProvider>
  );
};

export default Application;
