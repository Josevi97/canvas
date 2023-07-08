import { styled } from "styled-components";

const Events = styled.div`
  width: 100%;
  height: 100%;
`;

type StyledEventsProps = {
  children?: React.ReactNode,
  onMouseDown?(event: React.MouseEvent): void,
  onMouseUp?(event: React.MouseEvent): void,
}

const StyledEvents = (props: StyledEventsProps) => <Events {...props} />;

export default StyledEvents;
