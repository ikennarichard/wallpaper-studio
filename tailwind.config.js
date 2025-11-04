/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": ["Poppins-Regular"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-semibold": ["Poppins-Semibold"],
        "clash-display-regular": ["Clash-Display-Regular"],
        "clash-display-medium": ["Clash-Display-Medium"],
      },
      colors: {
        custom: {
          primary: "#575757",
          secondary: "#6b7280",
          light: "#808080",
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",

        overlay: "var(--color-overlay)",
        backgroundSecondary: "var(--color-bg-secondary)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        lightGreen: "var(--color-light-green)",
      },
    },
  },
  plugins: [],
};
