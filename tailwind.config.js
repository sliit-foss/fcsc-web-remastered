import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "secondary-light": "var(--secondary-light)"
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans"]
      },
      maxWidth: {
        body: "1920px"
      },
      transitionDuration: {
        medium: "300ms",
        long: "500ms"
      },
      screens: {
        xs: "400px"
      }
    }
  },
  plugins: [animate]
};
