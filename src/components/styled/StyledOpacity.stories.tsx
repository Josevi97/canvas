import { Meta, StoryObj } from "@storybook/react";
import StyledOpacity from "./StyledOpacity";

const meta: Meta<typeof StyledOpacity> = {
  component: StyledOpacity,
  argTypes: {
    opacity: {
      type: "number",
      control: {
        type: "range",
        min: "0",
        max: "1",
        step: "0.1",
      },
    },
  },
  args: {
    opacity: 0.7,
  },
  render: (props) => {
    return (
      <StyledOpacity {...props}>
        <div>Element</div>
      </StyledOpacity>
    );
  }
};

export const Primary: StoryObj<typeof StyledOpacity> = {
  ...meta,
  name: "Playground"
};

export default meta;
