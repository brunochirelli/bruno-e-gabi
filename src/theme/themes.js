import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const colorPrimary = "#666360";
const cardo = "'Cardo', serif";
const epilogue = "'Epilogue', sans-serif";

export const defaultTheme = createMuiTheme({
  palette: {
    text: {
      primary: colorPrimary,
    },
    background: {
      default: "#FFFAF6",
    },
  },
  typography: {
    body1: {
      fontFamily: cardo,
      color: colorPrimary,
    },
    caption: {
      fontFamily: epilogue,
      color: colorPrimary,
    },
  },
});

export default defaultTheme;
