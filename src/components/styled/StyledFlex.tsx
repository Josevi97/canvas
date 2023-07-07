import { styled } from "styled-components";

type StyledFlexProps = Pick<
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
  children: React.ReactNode,
} & StyledFlexProps;

const StyledFlex = (props: FlexProps) => {
  return (
    <Flex {...props}>
      {
        props.children
      }
    </Flex>
  );
};

export default StyledFlex;
