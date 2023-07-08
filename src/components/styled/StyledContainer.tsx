import { styled } from "styled-components";

type ContainerProps = Pick<
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

const Container = styled.div<ContainerProps>`
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

type StyledContainerProps = {
  children?: React.ReactNode,
} & ContainerProps;

const StyledContainer = (props: StyledContainerProps) => <Container {...props} />;

export default StyledContainer;
