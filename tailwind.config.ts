import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      robotoMedium: ['roboto-medium'],
      robotoRegular: ['roboto-regular'],
      inter: ['inter-extrabold-italic']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '2xl': "1740px",
      },
    },
  },
  plugins: [],
} satisfies Config;
