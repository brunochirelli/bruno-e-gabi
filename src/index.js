import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReduxProvider from "./redux/ReduxProvider";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { ThemeProvider as StyledTheme } from "styled-components";
import theme from "./theme/themes";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <StyledTheme theme={theme}>
          <CssBaseline />
          <App />
        </StyledTheme>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
