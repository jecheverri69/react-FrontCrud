import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

export const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});

export const color = {
  primary: "#563DFF",
  secondary: "#61D4B3",
  paper: "#FFFFFF",
  paper_2: "#F7F7F8",
  green: "#61D4B3",
};

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      main: color.primary,
    },
    secondary: {
      main: color.secondary,
    },
  },

  overrides: {
    

    MuiButton: {
      root: {
        "& span": {
          textTransform: "none",
          fontSize: "1em",
          fontFamily: '"Roboto", "Helvetica", "Arial"',
          [breakpoints.up("sm")]: {
            fontSize: "1em",
          },
        },
      },
      contained: {
        color: "#ffffff",
        backgroundColor: "#333333",
        borderRadius: "0.5em",
        minWidth: "6.25em",
        padding: "0.9em 1.1em",
        fontSize: "1em",
        "& span": {
          fontWeight: "bold",
          color: "#ffffff",
        },
        height: "30px",
        [breakpoints.up("sm")]: {
          minWidth: "100px",
          borderRadius: "0.5em",
          padding: "0.9em 1.1em",
          height: "2em",
        },
      },
    },

    

  },
});

export default theme;
