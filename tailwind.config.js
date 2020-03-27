module.exports = {
  theme: {
    colors: {
      black: "#0A0023",
      white: "#fff",
      blue: {
        100: "#E6EEFC",
        200: "#C1D5F7",
        300: "#9CBCF1",
        400: "#5189E7",
        500: "#0757DD",
        600: "#064EC7",
        700: "#043485",
        800: "#032763",
        900: "#021A42"
      },
      purple: {
        100: "#EAE6FD",
        200: "#C3B5FB",
        300: "#A895FA",
        400: "#8064F8",
        500: "#5934F6",
        600: "#3C23A6",
        700: "#27166C",
        800: "#180E44",
        900: "#110A31"
      },
      gray: {
        100: "#FAFAFB",
        200: "#F3F3F5",
        300: "#EBECEE",
        400: "#DCDEE2",
        500: "#CDD0D5",
        600: "#B9BBC0",
        700: "#7B7D80",
        800: "#5C5E60",
        900: "#3E3E40"
      },
      yellow: {
        100: "#FEF8E6",
        200: "#FDEDC0",
        300: "#FCE399",
        400: "#F9CD4D",
        500: "#F7B801",
        600: "#DEA601",
        700: "#946E01",
        800: "#6F5300",
        900: "#4A3700"
      }
    },
    screens: {
      xs: { min: "360px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "967px" },
      lg: { min: "968px", max: "1023px" },
      xl: { min: "1024px" }
    },
    fontFamily: {
      sans: ["Work Sans"],
      serif: ["Eczar"],
      mono: ["Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"]
    },
    truncate: {
      lines: {
        2: "2",
        4: "4",
        6: "6"
      }
    },
    extend: {}
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: [require("tailwindcss-truncate-multiline")()]
};
