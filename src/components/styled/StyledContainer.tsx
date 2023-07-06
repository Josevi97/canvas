import { styled } from "styled-components";

export type StyledContainerProps = Pick<
  StylesType,
  "width" |
  "height" |
  "backgroundColor"
>;

const Container = styled.div<StyledContainerProps>`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  background-color: ${props => props.backgroundColor || "none"};
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
