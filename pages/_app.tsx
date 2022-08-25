// import '../styles/globals.css';
import { CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';
import NavBar from '../components/navigation/NavBar';
import { lightTheme, darkTheme } from '../providers/theming/appTheme';
import { usePaletteTheme } from '../providers/theming/PaletteProvider';

const Portfolio = ({ Component, pageProps }) => {
  const palette = usePaletteTheme();
  return (
    <ThemeProvider
      theme={responsiveFontSizes(palette === 'light' ? lightTheme : darkTheme)}>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Portfolio;
