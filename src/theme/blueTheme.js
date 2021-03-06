import { createTheme } from '@mui/material/styles';
import { typography, breakpoints } from './commonTheme.js';

const palette = {
  primary: {
    light: '#DDDCFF',
    main: '#3969E8',
    dark: '#3969E8',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#DAFFD7',
    main: '#EFFFD2',
    dark: '#3969E8',
    contrastText: '#438C3D',
  },
  text: {
    primary: "#666666",
    secondary: "#00000",
    green: '#3969E8',
    light: '#999999',
  },
}

const components = {
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
  MuiCard: {
    styleOverrides: {
      root: {
        color: 'inherit',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        "&.MuiButton-contained.Mui-disabled": {
          color: palette.primary.contrastText,
          boxShadow: 'none',
          background: palette.primary.main,
          opacity: '0.3',
        }
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        "&.MuiTypography-h6": {
          lineHeight: '1.4',
        },
      },
    },
  },
  MuiDataGrid: {
    styleOverrides: {
      root: {
        ".MuiDataGrid-cell--editable": {
          outline: 'none!important',
          boxShadow: 'none!important',
          "&:hover": {
            cursor: 'pointer',
          },
          "> .Mui-focused": {
            border: '1px solid #3969E8',
            borderRadius: 0,
            ".MuiOutlinedInput-notchedOutline": {
              border: 'none',
            },
          },
        },
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      root: {
        ".MuiPopover-paper": {
          boxShadow: '0px 16px 24px 0px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
}

export const blueTheme = createTheme({
  palette: palette,
  typography: typography,
  breakpoints: breakpoints,
  components: components,
});
export const drawerWidth = '16vw';
export default blueTheme;