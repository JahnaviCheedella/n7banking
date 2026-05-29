import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
import { fontFamily, fontWeight, fontSize } from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.accentBlue,
      contrastText: colors.textWhite,
    },
    secondary: {
      main: colors.accentNavy,
    },
    background: {
      default: colors.bgDark,
      paper: colors.bgDarkCard,
    },
    text: {
      primary: colors.textWhite,
      secondary: colors.textWhiteMuted,
    },
  },
  typography: {
    fontFamily: fontFamily.primary,
    allVariants: { color: "inherit" },
    h1: { fontSize: fontSize.hero, fontWeight: fontWeight.bold, letterSpacing: "-0.02em" },
    h2: { fontSize: fontSize.h1, fontWeight: fontWeight.bold, letterSpacing: "-0.02em" },
    h3: { fontSize: fontSize.h2, fontWeight: fontWeight.semiBold },
    h4: { fontSize: fontSize.h3, fontWeight: fontWeight.semiBold },
    h5: { fontSize: fontSize.h4, fontWeight: fontWeight.medium },
    h6: { fontSize: fontSize.h5, fontWeight: fontWeight.medium },
    body1: { fontSize: fontSize.body, fontWeight: fontWeight.regular },
    body2: { fontSize: fontSize.caption, fontWeight: fontWeight.regular },
    caption: { fontSize: fontSize.xs },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: fontWeight.semiBold,
          borderRadius: "8px",
          fontSize: fontSize.body,
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
  },
});

export default theme;
