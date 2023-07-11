import { styled } from "styled-components";

type BackgroundProps = Pick<
  StylesType,
  "backgroundColor" |
  "backgroundImage" |
  "backgroundPosition" |
  "backgroundSize" |
  "backgroundRepeat"
>

const Background = styled.div<BackgroundProps>`
  background-color: ${props => props.backgroundColor || "none"};
  background-image: ${props => props.backgroundImage || "none"};
  background-position: ${props => props.backgroundPosition || "none"};
  background-size: ${props => props.backgroundSize || "none"};
  background-repeat: ${props => props.backgroundRepeat || "none"};

  width: 100%;
  height: 100%;
`;

type StyledBackgroundProps = {
  children?: React.ReactNode,
} & BackgroundProps;

const StyledBackground = (props: StyledBackgroundProps) => <Background {...props} />;

export default StyledBackground;
