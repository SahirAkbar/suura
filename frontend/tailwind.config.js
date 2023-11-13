/** @type {import('tailwindcss').Config} */
//  defaultTheme  import("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontSize: {
        ["body-bold"]: [
          "1.75rem",
          {
            lineHeight: "2rem",
            fontWeight: "extrabold",
          },
        ],
        ["body-caption-bold"]: [
          "2.2rem",
          {
            lineHeight: "4rem",
            fontWeight: "extrabold",
          },
        ],
        ["heading-bold"]: [
          "3.125rem",
          {
            lineHeight: "4rem",
            fontWeight: "extrabold",
          },
        ],
        ["sub-heading-bold"]: [
          "2.5rem",
          {
            lineHeight: "3rem",
            fontWeight: "extrabold",
          },
        ],
        ["body-normal"]: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "normal",
          },
        ],
        ["body-medium"]: [
          "1.375rem",
          {
            lineHeight: "2rem",
            fontWeight: "semibold",
          },
        ],
        ["body-small"]: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "semibold",
          },
        ],
      },
      colors: {
        "primary-500": "#877EFF",
        "primary-600": "#5D5FEF",
        "secondary-500": "#FFB620",
        "off-white": "#D0DFFF",
        red: "#FF5A5A",
        "dark-1": "#000000",
        "dark-2": "#09090A",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "pearl-white": "#fffbf9",
        gray: "#7F8AA5",
        "gray-outline": "#ABB2C4",
        "brown-10": "#C7987A",
        "tale-10": "#69884F",
        "dark-8": "#2B2A40",
        "dark-8-5": "#1F1E33",
        "dark-5": "#58576F",
      },
      screens: {
        xs: "480px",
        md: "640px",
        lg: "1040px",
        xl: "1296px",
        "2xl": "1450px",
        "3xl": "1680px",
      },
      width: {
        420: "420px",
        465: "465px",
      },
      fontFamily: {
        OTabolas: ["OTAbalos-Regular"],
        OTabolasH: ["OTAbalos-Hairline"],
        OTabolasM: ["OTAbalos-Medium"],
        TTHoves: ["TT-Hoves-Regular"],
        TTHovesM: ["TT-Hoves-Medium"],
        TTHovesSB: ["TT-Hoves-SemiBold"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
