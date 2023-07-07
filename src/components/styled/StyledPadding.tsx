import { styled } from "styled-components";

type StyledPaddingProps = Pick<
  StylesType,
  "padding"
>

const Padding = styled.div<StyledPaddingProps>`
  padding: ${props => props.padding || "0"};
`;

type PaddingProps = {
  children: React.ReactNode,
} & StyledPaddingProps;

const StyledPadding = (props: PaddingProps) => {
  return (
    <Padding {...props} >
      {
        props.children
      }
    </Padding>
  );
};

export default StyledPadding;
