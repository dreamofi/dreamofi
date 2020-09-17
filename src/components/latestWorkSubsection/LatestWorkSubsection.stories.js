import React from "react";
import LatestWorkSubsection from "./LatestWorkSubsection.component";
import sampleProduct from "../../images/3-devices-black.png";

const colorSelection = ["nearblack", "lightgrey"];

export default {
  title: "Components/LatestWorkSubsection",
  component: LatestWorkSubsection,
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

const Template = (args) => <LatestWorkSubsection {...args} />;
export const Default = Template.bind({});

Default.args = {
  backgroundColor: "lightgrey",
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  imgUrl: sampleProduct,
  reverse: true,
};
