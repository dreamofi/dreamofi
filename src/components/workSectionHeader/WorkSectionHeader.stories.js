import React from "react";
import WorkSectionHeader from "./WorkSectionHeader.component";

export default {
  title: "Components/WorkSectionHeader",
  component: WorkSectionHeader,
};

const Template = (args) => <WorkSectionHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Latest works",
};
