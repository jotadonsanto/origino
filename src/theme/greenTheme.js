import { createTheme } from '@mui/material/styles';
import { typography, breakpoints } from './commonTheme.js';

const palette = {
  primary: {
    light: '#DAFFD7',
    main: '#76CC81',
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
  MuiDialog: {
    styleOverrides: {
      root: {
        ".MuiDialog-paper": {
          padding: '2rem',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "input[type=search]": {
          '&::-webkit-search-cancel-button': {
            '-webkit-appearance': 'none',
            width: '15px',
            height: '15px',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='15' height='15' viewBox='0 0 130 130'%3E%3Cline x1='14' y1='10' x2='120' y2='120' stroke-width='10' stroke='%23999' /%3E%3Cline x1='10' y1='120' x2='120' y2='10' stroke-width='10' stroke='%23999' /%3E%3C/svg%3E")`,
          },
        },
      }
    }
  },
}


export const greenTheme = createTheme({
  palette: palette,
  typography: typography,
  breakpoints: breakpoints,
  components: components,
});
export const drawerWidth = '16vw';
export default greenTheme;