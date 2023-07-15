import { Meta, StoryObj } from "@storybook/react";
import StyledBackground from "./StyledBackground";

const meta: Meta<typeof StyledBackground> = {
  component: StyledBackground,
  argTypes: {
    backgroundColor: {
      type: "string",
    },
    backgroundPosition: {
      type: "string",
    },
    backgroundRepeat: {
      type: "string"
    },
    backgroundSize: {
      type: "string",
    },
    backgroundImage: {
      type: "string",
      control: {
        type: "file"
      }
    },
  },
  args: {
    backgroundColor: "orange",
    backgroundPosition: "0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "200px",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/598/666/470/mercedes-benz-mercedes-refueling-rain-wallpaper-preview.jpg",
  },
  render: (props) => {
    return (
      <div style={{ width: "300px", height: "300px",}}>
        <StyledBackground {...props} />
      </div>
    );
  }
};

export const Primary: StoryObj<typeof StyledBackground> = {
  ...meta,
  name: "Playground"
};

export default meta;
