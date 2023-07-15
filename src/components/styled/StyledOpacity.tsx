import { styled } from "styled-components";

type StyledOpacityProps = Pick<
  StylesType,
  "opacity"
>

const Opacity = styled.div<StyledOpacityProps>`
  opacity: ${props => props.opacity || 1};

  width: 100%;
  height: 100%;
`;

type OpacityProps = {
  children?: React.ReactNode,
} & StyledOpacityProps;

const StyledOpacity = (props: OpacityProps) => {
  return <Opacity {...props} />;
};

export default StyledOpacity;
