import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const colorPrimary = "#666360";
const colorSecondary = "#bb5252";
const cardo = "'Cardo', serif";
const epilogue = "'Epilogue', sans-serif";

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },

    background: {
      default: "#FFFAF6",
    },
  },
  typography: {
    h3: {
      fontFamily: epilogue,
      color: colorPrimary,
    },
    h5: {
      fontFamily: epilogue,
      color: colorPrimary,
    },
    h6: {
      fontFamily: cardo,
    },
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
