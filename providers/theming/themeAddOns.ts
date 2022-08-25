declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    drawerWidth: number;
    navbarHeight: () => number;
    drawer: {
      top: number;
      height: string;
      '@media (min-width: 0px) and (orientation: landscape)': {
        top: number;
        height: string;
      };
      '@media (min-width:6000px)': {
        top: number;
        height: string;
      };
    };
    portfolioTable: {
      borderCollapse: 'collapse';
      borderSpacing: 0;
      emptyCells: 'show';
      borderRight: string;
      borderBottom: string;
      margin: string;
      '& thead': {
        color: string;
        textAlign: 'center';
        verticalAlign: 'center';
      };
      '& th': {
        padding: string;
      };
      '& th, td': {
        borderTop: string;
        borderLeft: string;
        margin: 0;

        textAlign: 'center';
      };
      '& td': {
        padding: string;
      };
      '& .highlight': {
        background: string;
      };
    };
  }

  interface ThemeOptions {
    drawerWidth?: number;
    navbarHeight?: () => number;
    drawer?: {
      top?: number;
      height?: string;
      '@media (min-width: 0px) and (orientation: landscape)': {
        top?: number;
        height?: string;
      };
      '@media (min-width:6000px)': {
        top?: number;
        height?: string;
      };
    };
    portfolioTable?: {
      borderCollapse: 'collapse';
      borderSpacing: 0;
      emptyCells: 'show';
      borderRight: string;
      borderBottom: string;
      margin: string;
      '& thead': {
        color: string;
        textAlign: 'center';
        verticalAlign: 'center';
      };
      '& th': {
        padding: string;
      };
      '& th, td': {
        borderTop: string;
        borderLeft: string;
        margin: 0;

        textAlign: 'center';
      };
      '& td': {
        padding: string;
      };
      '& .highlight': {
        background: string;
      };
    };
  }
}
export {};
