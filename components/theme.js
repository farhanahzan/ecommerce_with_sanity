import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#555d70',
      main: '#2b3445',
      dark: '#020d1e',
      contrastText: '#ffffff',
    },

    secondary: {
      light: '#ffffff',
      main: '#f6f6f6',
      dark: '#c3c3c3',
      contrastText: '#2b3445',
    },
    error: {
      light: '#ff7370',
      main: '#d63f44',
      dark: '#9e001d',
      contrastText: '#ffffff',
    },
    hover: {
      light: '#585858',
      main: '#2f2f2f',
      dark: '#050505',
      contrastText: '#ffffff',
    },
  },
});
