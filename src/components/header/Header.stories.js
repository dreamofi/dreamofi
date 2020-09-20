import React from 'react';
import Header from './Header.component';

export default {
  title: "Components/Header",
  component: Header,
}

const Template = (args) => <Header {...args} />;
export const Default = Template.bind({});

