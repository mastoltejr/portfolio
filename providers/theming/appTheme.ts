import { createTheme, ThemeOptions } from '@mui/material/styles';
// import '@mui/themeAugmentation';

const baseTheme = {
  typography: {
    fontFamily: '"Poppins","Arial", sans-serif'
  }
};

export const lightTheme = createTheme({
  drawerWidth: 350,
  navbarHeight: (): number => (window.innerWidth <= 600 ? 56 : 64),
  drawer: {
    top: 56,
    height: 'calc(100vh - 56px)',
    '@media (min-width: 0px) and (orientation: landscape)': {
      top: 56,
      height: 'calc(100% - 56px)'
    },
    '@media (min-width:6000px)': {
      top: 64,
      height: 'calc(100% - 64px)'
    }
  },
  ...baseTheme,
  palette: {
    mode: 'light',
    divider: 'rgba(0, 0, 0, 0.12)',
    primary: {
      main: '#642B73',
      contrastText: '#1D1B29'
    },
    secondary: {
      main: '#2A2F3B',
      contrastText: '#1D1B29'
    },
    text: {
      primary: '#1D1B29'
    },
    background: {
      default: '#F5F3F7',
      paper: '#FFF'
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            color: 'white',
            borderRadius: 4,
            background: 'linear-gradient(to right top, #C6426E, #642B73)'
          }
        }
      ]
    }
  },
  portfolioTable: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
    emptyCells: 'show',
    borderRight: `1px solid rgba(0, 0, 0, 0.12)`,
    borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
    margin: '8px 0px',
    '& thead': {
      color: '#642B73',
      textAlign: 'center',
      verticalAlign: 'center'
    },
    '& th': {
      padding: '8px 16px'
    },
    '& th, td': {
      borderTop: `1px solid rgba(0, 0, 0, 0.12)`,
      borderLeft: `1px solid rgba(0, 0, 0, 0.12)`,
      margin: 0,

      textAlign: 'center'
    },
    '& td': {
      padding: '4px 8px'
    },
    '& .highlight': {
      background: '#DEBCE6'
    }
  }
});

export const darkTheme = createTheme({
  drawerWidth: 350,
  navbarHeight: (): number => (window.innerWidth <= 600 ? 56 : 64),
  drawer: {
    top: 56,
    height: 'calc(100vh - 56px)',
    '@media (min-width: 0px) and (orientation: landscape)': {
      top: 56,
      height: 'calc(100% - 56px)'
    },
    '@media (min-width:6000px)': {
      top: 64,
      height: 'calc(100% - 64px)'
    }
  },
  ...baseTheme,
  palette: {
    mode: 'dark',
    divider: 'rgba(255, 255, 255, 0.12)',
    primary: {
      main: '#6E51E4',
      contrastText: '#F5F3F7'
    },
    secondary: {
      main: '#B76CE9',
      contrastText: 'F5F3F7'
    },
    text: {
      primary: '#F5F3F7'
    },
    background: {
      default: '#1D1B29',
      paper: '#2A2F3B'
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            color: 'white',
            borderRadius: 4,
            background: 'linear-gradient(to right top, #6E51E4, #B76CE9)'
          }
        }
      ]
    }
  },
  portfolioTable: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
    emptyCells: 'show',
    borderRight: `1px solid rgba(0, 0, 0, 0.12)`,
    borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
    margin: '8px 0px',
    '& thead': {
      color: '#6E51E4',
      textAlign: 'center',
      verticalAlign: 'center'
    },
    '& th': {
      padding: '8px 16px'
    },
    '& th, td': {
      borderTop: `1px solid rgba(0, 0, 0, 0.12)`,
      borderLeft: `1px solid rgba(0, 0, 0, 0.12)`,
      margin: 0,

      textAlign: 'center'
    },
    '& td': {
      padding: '4px 8px'
    },
    '& .highlight': {
      background: '#C4B8F4'
    }
  }
});
