import React, { createContext, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../i18n";
import { getDesignTokens } from "./Theme";
import { ThemeProvider, useTheme } from "@emotion/react";
import { createTheme } from "@mui/material";

export const ThemePage = createContext("");
const Main = () => {
  const [theme, setTheme] = useState("light");

  // const saveTheme = localStorage.getItem("theme");

  const darkModeTheme = createTheme(getDesignTokens(theme));
  return (
    <>
      <ThemePage.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={darkModeTheme}>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </ThemeProvider>
      </ThemePage.Provider>
    </>
  );
};

export function useStateTheme() {
  return useContext(ThemePage);
}

ReactDOM.render(<Main />, document.getElementById("root"));