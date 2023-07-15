import { Meta, StoryObj } from "@storybook/react";
import StyledPadding from "./StyledPadding";

const meta: Meta<typeof StyledPadding> = {
  component: StyledPadding,
  argTypes: {
    padding: {
      type: "string",
    },
  },
  args: {
    padding: "20px",
  },
  render: (props) => {
    return (
      <div style={{ backgroundColor: "orange", width: "fit-content", height: "fit-content" }}>
        <StyledPadding {...props}>
          <div style={{backgroundColor: "#FFBF00", width: "100px", height: "100px"}}></div>
        </StyledPadding>
      </div>
    );
  }
};

export const Primary: StoryObj<typeof StyledPadding> = {
  ...meta,
  name: "Playground",
};

export default meta;
