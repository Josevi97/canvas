import { styled } from "styled-components";

/**
 * TODO: border should be in a different StyledComponent file
 * "StyledBorder"
 */
type ContainerProps = Pick<
  StylesType,
  "width" |
  "minWidth" |
  "height" |
  "backgroundColor" |
  "border" |
  "borderBottom" |
  "borderRadius" |
  "flexGrow" |
  "userSelect" |
  "zIndex"
>;

const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${props => props.width || "fit-content"};
  min-width: ${props => props.minWidth || "auto"};
  height: ${props => props.height || "auto"};
  background-color: ${props => props.backgroundColor || "none"};
  border: ${props => props.border || "none"};
  border-bottom: ${props => props.borderBottom || "auto"};
  border-radius: ${props => props.borderRadius || "0"};
  flex-grow: ${props => props.flexGrow || 0};
  user-select: ${props => props.userSelect || "none"};
  z-index: ${props => props.zIndex || 0}
`;

type StyledContainerProps = {
  children?: React.ReactNode,
} & ContainerProps;

const StyledContainer = (props: StyledContainerProps) => <Container {...props} />;

export default StyledContainer;
