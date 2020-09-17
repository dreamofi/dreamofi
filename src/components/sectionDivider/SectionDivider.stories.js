import React from "react";
import SectionDivider from "./SectionDivider.component";

const colorSelection = ["nearblack", "lightgrey", "darkgrey"];

export default {
  title: "Components/SectionDivider",
  component: SectionDivider,
  argTypes: {
    topColor: {
      control: {
        type: "select",
        options: [...colorSelection],
      },
    },
    bottomColor: {
      control: {
        type: "select",
        options: [...colorSelection],
      },
    },
    isTop: {
      control: {
        type: "select",
        options: [true, false],
      },
    },
    isFooter: {
      control: {
        type: "select",
        options: [true, false],
      },
    },
  },
};

const Template = (args) => <SectionDivider {...args} />;
export const Default = Template.bind({});

Default.args = {
  topColor: "nearblack",
  bottomColor: "lightgrey",
  isTop: true,
  isFooter: false,
};
