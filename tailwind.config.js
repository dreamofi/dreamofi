// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        lightgrey: "#F4F4F4",
        darkgrey: "#C4C4C4",
        golden: "#FFCE64",
        pink: "#FD6881",
        lightblue: "#6498FE",
        darkblue: "#4F77CC",
        nearblack: "#3E3D54",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      inset: {
        "1/2": "50%",
        2: "2rem",
        "38pr": "38%",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
