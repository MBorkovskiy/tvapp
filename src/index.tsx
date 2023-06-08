import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./constants/theme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
