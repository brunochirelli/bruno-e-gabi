import { ThemeProvider as StyledTheme } from "styled-components";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReduxProvider from "../redux/ReduxProvider";
import theme from "../theme/themes";
import { render } from "@testing-library/react";
import App from "../App";

const AllProviders = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <StyledTheme theme={theme}>
          <CssBaseline />
          <App />
        </StyledTheme>
      </ThemeProvider>
    </ReduxProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
