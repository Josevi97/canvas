import { styled } from "styled-components";

export type StyledPaddingProps = Pick<
  StylesType,
  "padding"
>

const Padding = styled.div<StyledPaddingProps>`
  padding: ${props => props.padding || "0"};
`;

type PaddingProps = {
  styles?: StyledPaddingProps,
  children: React.ReactNode,
}

const StyledPadding = (props: PaddingProps) => {
  return (
    <Padding{...props.styles}>
      {
        props.children
      }
    </Padding>
  );
};

export default StyledPadding;
