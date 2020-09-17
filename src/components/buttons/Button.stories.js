import React from "react";
import Button from "./Button.component";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    buttonStyles: {
      control: {
        type: "select",
        options: ["default", "RESUME", "CARD"],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  buttonStyles: "default",
  label: "MY RESUME",
};
