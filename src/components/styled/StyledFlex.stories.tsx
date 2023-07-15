import { Meta, StoryObj } from "@storybook/react";
import StyledFlex from "./StyledFlex";

const meta: Meta<typeof StyledFlex> = {
  component: StyledFlex,
  argTypes: {
    flexDirection: {
      defaultValue: "row",
      options: ["row", "column"],
    },
    gap: {
      defaultValue: "0px",
      type: "string"
    },
    justifyContent: {
      defaultValue: "center",
      options: ["center", "space-between", "space-evenly", "space-end", "space-start"],
    },
    alignItems: {
      defaultValue: "center",
      options: ["center", "start", "end"],
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
      <div style={{ height: "100vh" }}>
        <StyledFlex {...props}>
          <div>First</div>
          <div>Second</div>
          <div>Third</div>
        </StyledFlex>
      </div>
    );
  }
};

export const Primary: StoryObj<typeof StyledFlex> = {
  ...meta,
  name: "Playground",
};

export default meta;
