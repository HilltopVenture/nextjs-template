/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { withAnimations } = require("animated-tailwindcss");
const generateSpacing = ({
  from = 0,
  to = 150,
  step = 1,
  unit = "rem",
  denominator = 4.0,
}) => {
  let values = {};
  for (let i = from; i <= to; i = i + step) {
    values[`${i}`] = `${i / denominator}${unit}`;
  }
  return values;
};

module.exports = withAnimations({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "440px",
        950: "950px",
        1440: "1440px",
        1356: "1356px",
      },
      colors: {
        primary: "#375BD2",
        primaryLight: "#BEC9ED",
        primaryDark: "#3D6080",
        dark: "#222222",
        gray: "#52566D",
      },
      fontSize: {
        50: "50px",
        45: "45px",
        40: "40px",
        35: "35px",
        25: "25px",
        10: "10px",
      },
      borderRadius: {
        5: "5px",
        10: "10px",
      },
      spacing: {
        ...generateSpacing({ step: 0.25, to: 150 }),
      },
      minHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
      minWidth: ({ theme }) => ({
        ...theme("spacing"),
      }),
      maxWidth: ({ theme }) => ({
        ...theme("spacing"),
        "8xl": "1440px",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
});
