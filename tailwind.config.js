/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        blackTeal: "#061d1b",
        white2: "#fdfbfd",
      },
      keyframes: {
        spark: {
          "25%,50%, 100%": {
            color: "#dd9551",
            boxShadow: "inset -2px -2px 10px 2px #dd9551",
          },
          "0%, 40%, 75%": {
            color: "#71717a",
            boxShadow: "none",
          },
        },
        sparkOut: {
          "25%,50%, 100%": {
            boxShadow: "0px 4px 1px 0px #dd955160",
          },
          "0%, 40%, 75%": {
            boxShadow: "0px 4px 1px 0px #dd955100",
          },
        },
      },
      animation: {
        spark: "spark 2s step-end forwards",
        sparkOut: "sparkOut 2s step-end forwards",
      },
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        spectral: ["Spectral SC", "monospace"],
        games: ["Games", "sans-serif"],
        uniSans: ["UniSans", "sans-serif"],
        grandezza: ["Grandezza", "serif"],
      },
    },
  },
  plugins: [],
};
