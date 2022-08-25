import React from 'react';
import { Code, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useScrollTrigger,
  IconButton,
  Button,
  useTheme
} from '@mui/material';
// import SideMenu from './SideMenu';
import ovvImage from '../../browser/ovi-logo-white.png';

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 8 : 0
  });
}

const NavBar = () => {
  const [menu, setMenu] = React.useState<boolean>(false);
  const theme = useTheme();

  const toggleMenu = () =>
    // @ts-ignore
    setMenu((v) => !v);

  const pages = ['Portfolio', 'Project Sagas', 'Contact'];

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar sx={{ backgroundColor: 'background.paper' }}>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                fontWeight: '700',
                textDecoration: 'none',
                background: `-webkit-linear-gradient(45deg, ${
                  theme.palette.mode === 'light'
                    ? '#C6426E, #642B73'
                    : '#6E51E4, #B76CE9'
                })`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer'
              }}>
              {'< /> Michael Stolte'}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={toggleMenu}
                color='inherit'>
                <svg width={0} height={0}>
                  <linearGradient id='linearColors' x1={1} y1={0} x2={0} y2={1}>
                    <stop
                      offset={0}
                      stopColor={`rgba(${
                        theme.palette.mode === 'light'
                          ? '198,66,110'
                          : '183,108,233'
                      },1)`}
                    />
                    <stop
                      offset={1}
                      stopColor={`rgba(${
                        theme.palette.mode === 'light'
                          ? '100,43,115'
                          : '110,81,228'
                      },1)`}
                    />
                  </linearGradient>
                </svg>
                <Menu sx={{ fill: 'url(#linearColors)' }} />
                {/* <Menu /> */}
              </IconButton>
            </Box>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                color: 'inherit',
                fontWeight: '700',
                textDecoration: 'none',
                background: `-webkit-linear-gradient(45deg, ${
                  theme.palette.mode === 'light'
                    ? '#C6426E, #642B73'
                    : '#6E51E4, #B76CE9'
                })`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer'
              }}>
              {'< /> Michael Stolte'}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                color: 'black'
              }}>
              {pages.map((page) => (
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover': {
                      '& .underline': {
                        backgroundColor: `${theme.palette.primary.main}!important`,
                        left: '0!important',
                        right: '0!important'
                      }
                    }
                  }}>
                  <Typography
                    key={page}
                    variant='h6'
                    noWrap
                    component='a'
                    href='/'
                    sx={{
                      m: 2,
                      display: 'block',
                      postion: 'relative',
                      textDecoration: 'none',
                      background: `-webkit-linear-gradient(45deg, ${
                        theme.palette.mode === 'light'
                          ? '#C6426E, #642B73'
                          : '#6E51E4, #B76CE9'
                      })`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      cursor: 'pointer'
                    }}>
                    {page}
                  </Typography>
                  <div
                    className='underline'
                    style={{
                      position: 'absolute',
                      inset: 'auto 50% 0 50%',
                      backgroundColor: 'transparent',
                      transition:
                        'right 0.2s ease-out 0s, left 0.2s ease-out 0s',
                      height: '2px'
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button variant='gradient'>Resume</Button>
            </Box>
          </Toolbar>
          {/* <SideMenu menu={menu} toggleMenu={toggleMenu} /> */}
        </AppBar>
      </ElevationScroll>
      <Toolbar id='back-to-top-anchor' />
    </React.Fragment>
  );
};

export default NavBar;
