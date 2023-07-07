import { styled } from "styled-components";

type StyledButtonProps = Pick<
  StylesType,
  "width" |
  "height" |
  "backgroundColor" |
  "color" |
  "border"
>

type ButtonProps = {
  children: React.ReactNode,
  onClick?(): void,
} & StyledButtonProps;

const Button = styled.button<StyledButtonProps>`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || props.width || "auto"};
  background-color: ${props => props.backgroundColor || "var(--white-color)"};
  color: ${props => props.color || "var(--primary-color))"};
  border: ${props => props.border || "none"};
  cursor: pointer;
`;

const StyledButton = (props: ButtonProps) => {
  return (
    <Button {...props}>
      {
        props.children
      }
    </Button>
  );
};

export default StyledButton;
