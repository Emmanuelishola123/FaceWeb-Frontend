module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(_-primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        danger: "var(--danger)",

        /* LIGHT COLORS */
        bg: "#f9f9f9",
        box: "#ffffff",
        comment_box : "#f0f2f5",
        floating_btn: "#ffffff",
        color: "#050505",

        /* DARK COLORS */
        bg_dark: "#18191a",
        box_dark: "#242526",
        comment_box_dark: "#3a3b3c",
        floating_btn_dark: "#4b4c4f",
        color_dark: "#e6e5eb",
      },
    },
  },
  plugins: [],
};
