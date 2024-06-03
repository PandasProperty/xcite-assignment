import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      bunting: {
        '50': '#f0f4fd',
        '100': '#e4eafb',
        '200': '#ced9f7',
        '300': '#b0bff1',
        '400': '#919ee8',
        '500': '#767fde',
        '600': '#5b5cd0',
        '700': '#4c4bb7',
        '800': '#3f3f94',
        '900': '#393b76',
        '950': '#1f1f40',
      },
      gold: {
        '50': '#ffffe7',
        '100': '#feffc1',
        '200': '#fffd86',
        '300': '#fff441',
        '400': '#ffe60d',
        '500': '#ffd700',
        '600': '#d19e00',
        '700': '#a67102',
        '800': '#89580a',
        '900': '#74480f',
        '950': '#442604',
      },
    }
  },
  plugins: [],
};
export default config;
