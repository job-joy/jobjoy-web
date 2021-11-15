import { amber, grey, red } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#26292C',
            light: 'rgb(81, 91, 95)',
            dark: 'rgb(26, 35, 39)',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#FFB74D',
            light: 'rgb(255, 197, 112)',
            dark: 'rgb(200, 147, 89)',
            contrastText: 'rgba(0, 0, 0, 0.87)',
          },
          titleBar: {
            main: '#555555',
            contrastText: '#ffffff',
          },
          error: {
            main: red.A400,
          },
        }),
  },
});
