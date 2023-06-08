import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.MuiToggleButton-root": {
            color: "white",
          },
          "&.Mui-selected": {
            backgroundColor: "#ff3d71",
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ff3d71",
    },
    secondary: {
      main: "rgb(249, 249, 249,20%)",
    },
  },
  typography: {
    fontFamily: `"Lato", sans-serif `,
    fontSize: 16,
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
});
