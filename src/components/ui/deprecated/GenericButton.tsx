import StyledButton from "../../styled/deprecated/StyledButton";

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

const GenericButton = (props: GenericButtonProps) => {
  // TODO: useCallback is the way to do this

  const _disabled = props.disabled ? "disabled-" : "";
  const backgroundColor = `--${props.type}-${_disabled}color`;
  const color = `--${props.outlined || props.type == "default" ? props.type : "white"}-${_disabled}color`;

  // TODO: I could use ts constants to make this simple
  return (
    <StyledButton
      {...props}
      backgroundColor={props.outlined || props.type === "default" ? "transparent" : `var(${backgroundColor})`}
      color={`var(${color})`}
      border={!props.outlined || props.borderless ? "none" : `var(--${props.type}-${_disabled}border)`}
      >
      {
        props.children
      }
    </StyledButton>
  );
};

export default GenericButton;
