import { styled } from "styled-components";

type StyledPositionProps = Pick<
  StylesType,
  "top" |
  "right" |
  "bottom" |
  "left"
>

type PositionProps = {
  children: React.ReactNode,
} & StyledPositionProps;

const Position = styled.div<StyledPositionProps>`
  position: absolute;
  top: ${props => props.top || "auto"};
  right: ${props => props.right || "auto"};
  bottom: ${props => props.bottom || "auto"};
  left: ${props => props.left || "auto"};
`;


const StyledPosition = (props: PositionProps) => {
  return (
    <Position {...props}>
      {
        props.children
      }
    </Position>
  );
};

export default StyledPosition;
