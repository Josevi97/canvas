import { styled } from "styled-components";

export type StyledContainerProps = Pick<
  StylesType,
  "width" |
  "height" |
  "backgroundColor" |
  "border" |
  "borderBottom" |
  "flexGrow"
>;

const Container = styled.div<StyledContainerProps>`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "auto"};
  background-color: ${props => props.backgroundColor || "none"};
  border: ${props => props.border || "none"};
  border-bottom: ${props => props.borderBottom || "none"};
  flex-grow: ${props => props.flexGrow || 0};
`;

type ContainerProps = {
  styles?: StyledContainerProps,
  children: React.ReactNode,
};

const StyledContainer = (props: ContainerProps) => {
  return (
    <Container {...props.styles}>
      {
        props.children
      }
    </Container>
  );
};

export default StyledContainer;
