import { styled } from "styled-components";

type StyledOpacityProps = Pick<
  StylesType,
  "opacity"
>

const Opacity = styled.div<StyledOpacityProps>`
  opacity: ${props => props.opacity || 1}
`;

type OpacityProps = {
  children?: React.ReactNode,
} & StyledOpacityProps;

const StyledOpacity = (props: OpacityProps) => {
  return <Opacity {...props} />;
};

export default StyledOpacity;
