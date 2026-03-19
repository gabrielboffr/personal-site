/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        surface: "#12121A",
        card: "#1A1A24",
        border: "#262632",
        foreground: "#F5F5F5",
        muted: "#A1A1AA",
        primary: {
          default: "#3B82F6",
          strong: "#2563EB",
          soft: "#60A5FA",
          glow: "#93C5FD",
        },
        code: {
          variables: "#F07178",
          name: "#61AFEF",
          keys: "#F7D54A",
          string: "#F5A97F",
          props: "#C5C5C5",
          arrays: "#C678DD",
        }
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #2563EB 0%, #3B82F6 40%, #60A5FA 100%)",

        "gradient-dark":
          "radial-gradient(circle at top, #0f172a 0%, #000000 100%)",

        "gradient-glow":
          "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.4), rgba(37,99,235,0.1), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(59,130,246,0.4)",
        "glow-strong": "0 0 50px rgba(59,130,246,0.6)",
      },
    },
  },
  plugins: [],
};