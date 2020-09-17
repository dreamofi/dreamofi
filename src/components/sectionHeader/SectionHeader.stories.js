import React from "react";
import SectionHeader from "./SectionHeader.component";

export default {
  title: "Components/SectionHeader",
  component: SectionHeader,
  decorators: [(Story) => <div><Story/></div>]
};

const Template = (args) => <SectionHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Website for Akari Center",
};
