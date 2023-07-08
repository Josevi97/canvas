import { styled } from "styled-components";

type PaddingProps = Pick<
  StylesType,
  "padding"
>

const Padding = styled.div<PaddingProps>`
  padding: ${props => props.padding || "0"};

  width: 100%;
  height: 100%;
`;

type StyledPaddingProps = {
  children?: React.ReactNode,
} & PaddingProps;

const StyledPadding = (props: StyledPaddingProps) => <Padding {...props} />;

export default StyledPadding;
