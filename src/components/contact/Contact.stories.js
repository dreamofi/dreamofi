import React from 'react';
import Contact from "./Contact.component";

export default {
  title: "Components/Contact",
  component: Contact,
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({})
