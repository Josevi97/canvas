import { styled } from "styled-components";

type PositionProps = Pick<
  StylesType,
  "top" |
  "right" |
  "bottom" |
  "left"
>

const Position = styled.div<PositionProps>`
  position: absolute;

  top: ${props => props.top || "auto"};
  right: ${props => props.right || "auto"};
  bottom: ${props => props.bottom || "auto"};
  left: ${props => props.left || "auto"};
`;

type StyledPositionProps = {
  children?: React.ReactNode,
} & PositionProps;

const StyledPosition = (props: StyledPositionProps) => <Position {...props} />;

export default StyledPosition;
