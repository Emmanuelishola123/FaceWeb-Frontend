module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        danger: "var(--danger)",

        /* LIGHT COLORS */
        bg: "#f0f2f5",
        box: "#ffffff",
        "comment-box": "#f0f2f5",
        "floating-btn": "#ffffff",
        color: "#050505",

        /* DARK COLORS */
        "bg-dark": "#18191a",
        "box-dark": "#242526",
        "comment-box-dark": "#3a3b3c",
        "floating-btn-dark": "#4b4c4f",
        "color-dark": "#e6e5eb",
      },
    },
  },
  plugins: [],
};
