import { styled } from "styled-components";

export type StyledFlexProps = Pick<
  StylesType,
  "flexDirection" |
  "justifyContent" |
  "alignItems" |
  "gap"
>;

const Flex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  gap: ${props => props.gap || "0"};
  width: 100%;
  height: 100%;
`;

type FlexProps = {
  styles?: StyledFlexProps,
  children: React.ReactNode,
}

const StyledFlex = (props: FlexProps) => {
  return (
    <Flex {...props.styles}>
      {
        props.children
      }
    </Flex>
  );
};

export default StyledFlex;
