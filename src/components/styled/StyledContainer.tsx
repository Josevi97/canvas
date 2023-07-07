import { styled } from "styled-components";

type StyledContainerProps = Pick<
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
