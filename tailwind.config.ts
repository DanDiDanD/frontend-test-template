import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "#ffffff",
          secondary: "#eeeeee",
        },
        gray: {
          medium: "#3B3B3B",
        },
        primary: "#585660",
        icon: {
          primary: "#8F8F8F",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "3/7": "43.5%",
        "4/7": "56.5%",
      },
    },
  },
  plugins: [],
};
export default config;
