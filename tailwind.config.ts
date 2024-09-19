import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'Quattrocento-Bold': ['Quattrocento-Bold'],
      'Questrial-Regular': ['Questrial-Regular'],
      'QuattrocentoSans-Bold': ['QuattrocentoSans-Bold'],
      'QuattrocentoSans-Regular': ['QuattrocentoSans-Regular']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
