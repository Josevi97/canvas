import { styled } from "styled-components";

type FlexProps = Pick<
  StylesType,
  "flexDirection" |
  "justifyContent" |
  "alignItems" |
  "gap"
>;

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  gap: ${props => props.gap || "0"};

  width: 100%;
  height: 100%;
`;

type StyledFlexProps = {
  children?: React.ReactNode,
} & FlexProps;

const StyledFlex = (props: StyledFlexProps) => <Flex {...props} />;

export default StyledFlex;
