import { createTheme } from '@mui/material/styles';

const typography = {
  fontFamily: ['Ubuntu', 'Open Sans'].join(','),
  h3: {
    fontWeight: 500,
  }
}
const palette = {
  primary: {
    light: '#DCE4FF',
    main: '#3969E8',
    dark: '#393de8',
    contrastText: '#FFFFFF',
  },
  text: {
    primary: "#000000",
    secondary: "#828282",
    blue: '#3969E8',
  },
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 768,
    lg: 1024,
    xl: 1366,
  },
}

export const signInTheme = createTheme({
  palette: palette,
  typography: typography,
  breakpoints: breakpoints,
});
export default signInTheme;