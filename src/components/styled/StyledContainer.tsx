import { styled } from "styled-components";

type StyledContainerProps = Pick<
  StylesType,
  "width" |
  "height" |
  "backgroundColor" |
  "border" |
  "borderBottom" |
  "flexGrow" |
  "userSelect" |
  "zIndex"
>;

const Container = styled.div<StyledContainerProps>`
  position: relative;
  width: ${props => props.width || "fit-content"};
  height: ${props => props.height || "auto"};
  background-color: ${props => props.backgroundColor || "white"};
  border: ${props => props.border || "none"};
  border-bottom: ${props => props.borderBottom || "auto"};
  flex-grow: ${props => props.flexGrow || 0};
  user-select: ${props => props.userSelect || "none"};
  z-index: ${props => props.zIndex || 0}
`;

type ContainerProps = {
  children: React.ReactNode,
} & StyledContainerProps;

const StyledContainer = (props: ContainerProps) => {
  return (
    <Container {...props}>
      {
        props.children
      }
    </Container>
  );
};

export default StyledContainer;
