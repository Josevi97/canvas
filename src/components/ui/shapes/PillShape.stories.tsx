import { Meta, StoryObj } from "@storybook/react";
import PillShape from "./PillShape";

const meta: Meta<typeof PillShape> = {
  component: PillShape,
  render: (props) => {
    return (
      <PillShape {...props}>
        Element
      </PillShape>
    );
  }
};

export const Primary: StoryObj<typeof PillShape> = {
  ...meta,
  name: "Playground",
};

export default meta;
