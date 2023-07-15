import { Meta, StoryObj } from "@storybook/react";
import StyledPosition from "./StyledPosition";

const meta: Meta<typeof StyledPosition> = {
  component: StyledPosition,
  argTypes: {
    top: {
      defaultValue: "auto",
      type: "string",
    },
    right: {
      defaultValue: "auto",
      type: "string",
    },
    bottom: {
      defaultValue: "auto",
      type: "string",
    },
    left: {
      defaultValue: "auto",
      type: "string",
    },
  },
  args: {
    top: "0",
    right: "auto",
    bottom: "auto",
    left: "0",
  },
  render: (props) => {
    return (
      <StyledPosition {...props}>
        <div>Element</div>
      </StyledPosition>
    );
  },
};

export const Primary: StoryObj<typeof StyledPosition> = {
  ...meta,
  name: "Playground",
};

export default meta;
