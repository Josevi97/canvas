import StyledButton, { StyledButtonProps } from "../styled/StyledButton";

type GenericButtonProps = {
  children: React.ReactNode,

  type: "primary" | "secondary" | "default";
  disabled?: boolean,
  outlined?: boolean,
  borderless?: boolean,

  onClick?(): void,
} & Pick<
  StylesType,
  "width" |
  "height" |
  "padding"
>

const GenericButton = ({ children, type, disabled, outlined, borderless, onClick, width, height, }: GenericButtonProps) => {
  const _disabled = disabled ? "disabled-" : "";
  const backgroundColor = `--${type}-${_disabled}color`;
  const color = `--${outlined || type == "default" ? type : "white"}-${_disabled}color`;

  const styles: StyledButtonProps = {
    backgroundColor: outlined || type === "default" ? "transparent" : `var(${backgroundColor})`,
    color: `var(${color})`,
    width: width,
    height: height,
    border: !outlined || borderless ? "none" : `var(--${type}-${_disabled}border)`,
  };

  return (
    <StyledButton onClick={onClick} styles={styles}>
      {
        children
      }
    </StyledButton>
  );
};

export default GenericButton;
