import React from "react";
import About from "./About.component";
import portraitImage from "../../images/portrait.jpg";

const colorSelection = ["nearblack", "lightgrey"];

export default {
  title: "Components/About",
  component: About,
  argTypes: {
    backgroundColor: {
      control: {
        type: "select",
        options: [...colorSelection],
      },
    },
    text: {
      control: "text",
    },
    imgUrl: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <About {...args} />;
export const Default = Template.bind({});

Default.args = {
  imgUrl: portraitImage,
};
