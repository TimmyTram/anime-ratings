import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#75b7ea",
        secondary: "#434343",
        complementary: "#a1e3d8",
        angryred: "#f75d5d",
        softangryred: "#f88a8a",
        softcomplementary: "#b9f0e1",
      }
    },
  },
  plugins: [],
};

export default config;