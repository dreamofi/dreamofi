import React from "react";

import Hero from "./Hero.component";

export default {
  title: "Components/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;
export const Default = Template.bind({});
