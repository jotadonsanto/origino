import { createTheme } from '@mui/material/styles';

const typography = {
  fontFamily: ['Ubuntu', 'Open Sans'].join(','),
  h3: {
    fontWeight: 500,
  }
}
const palette = {
  primary: {
    light: '#DAFFD7',
    main: '#176510',
    dark: '#61B15A',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#DAFFD7',
    main: '#EFFFD2',
    dark: '#61B15A',
    contrastText: '#438C3D',
  },
  text: {
    primary: "#666666",
    secondary: "#00000",
    green: '#61B15A',
    light: '#999999',
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

export const activosTheme = createTheme({
  palette: palette,
  typography: typography,
  breakpoints: breakpoints,
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: palette.primary.dark,
            backgroundColor: palette.primary.light,
            ".MuiIcon-root": {
              color: palette.primary.dark,
            },
            ".MuiTypography-root": {
              fontWeight: 500,
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `'Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'`,
        },
      },
    },
  },
});
export const drawerWidth = '16vw';
export default activosTheme;