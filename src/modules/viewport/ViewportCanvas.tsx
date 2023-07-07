import Container, { StyledContainerProps } from "../../components/styled/StyledContainer";

const viewportCanvasStyles: StyledContainerProps = {
  flexGrow: 1
};

const ViewportCanvas = () => {
  return (
    <Container styles={viewportCanvasStyles}>
      Viewport canvas
    </Container>
  );
};

export default ViewportCanvas;
