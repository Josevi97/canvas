import { styled } from "styled-components";

export type StyledButtonProps = Pick<
  StylesType,
  "width" |
  "height" |
  "backgroundColor" |
  "color" |
  "border"
>

type ButtonProps = {
  styles?: StyledButtonProps
  children: React.ReactNode,
  onClick?(): void,
}

const Button = styled.button<StyledButtonProps>`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || props.width || "auto"};
  background-color: ${props => props.backgroundColor || "var(--white-color)"};
  color: ${props => props.color || "var(--primary-color))"};
  border: ${props => props.border || "none"};
  cursor: pointer;
`;

const StyledButton = ({ styles, children, onClick}: ButtonProps) => {
  console.log(styles);
  return (
    <Button  {...styles} onClick={onClick}>
      {
        children
      }
    </Button>
  );
};

export default StyledButton;
