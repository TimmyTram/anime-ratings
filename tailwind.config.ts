import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#75b7ea",
        secondary: "#3a4856",
        secondarydark: "#2f3a45",
        complementary: "#3dc08d",
        angryred: "#f75d5d",
        softangryred: "#f88a8a",
        softcomplementary: "#70DAB0",
        purplegrad: "#8788cd",
        softpurplegrad: "#B0B1E3",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
       },
       animation: {
          appear: "appear 1s ease-in-out",
       },
    },
  },
  plugins: [],
};

export default config;