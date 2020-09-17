import React from "react";

import { action } from "@storybook/addon-actions";
//import { configure } from "@storybook/react";

import "../src/utils/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
// global.__BASE_PATH__ = "/";

global.__PATH_PREFIX__ = "";
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};
