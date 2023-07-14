import { Meta, StoryObj } from "@storybook/react";
import StyledFlex from "./StyledFlex";

type Story = StoryObj<typeof StyledFlex>;

const meta: Meta<typeof StyledFlex> = {
  component: StyledFlex,
};

export default meta;

const Default: Story = {
  argTypes: {
    flexDirection: {
      defaultValue: "row",
      type: "string"
    },
    gap: {
      defaultValue: "0px",
      type: "string"
    },
    justifyContent: {
      defaultValue: "center",
      type: "string"
    },
    alignItems: {
      defaultValue: "center",
      type: "string"
    },
  },
  args: {
    flexDirection: "row",
    gap: "50px",
    justifyContent: "center",
    alignItems: "center",
  },
  render: (props) => {
    return (
      // To simulate the center
      <div style={{height: "100vh"}}>
        <StyledFlex {...props}>
          <div>First</div>
          <div>Second</div>
          <div>Third</div>
        </StyledFlex>
      </div>
    );
  }
};

export const Primary: Story = {
  ...Default,
  name: "row",
};

export const Row: Story = {
  ...Default,
  name: "column",
  args: {
    ...Default.args,
    flexDirection: "column"
  },
};
