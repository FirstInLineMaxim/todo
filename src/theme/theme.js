const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96];
const breakpoints = ["576px", "768px", "992px", "1200px", "1400px"];
export const lightTheme = {
  isLight: true,
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  colors: {
    black: "#000e1a",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
  },
  space,
  fontSizes,
  breakpoints,
};
export const darkTheme = {
  isLight: false,
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  space,
  fontSizes,
  breakpoints,
};
