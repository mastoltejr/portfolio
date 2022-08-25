import { Box, Button, Paper, Typography } from '@mui/material';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Box p={2}>
      <Head>
        <title>Michael Stolte: Portfolio</title>
        <meta name='description' content="Michael Stolte's porfolio website." />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Paper elevation={2} sx={{ p: 4, my: 6 }}>
        <Typography variant='h4' color='primary'>
          Testing
        </Typography>
        <Button variant='gradient'>Woo fun</Button>
      </Paper>
      <Paper elevation={2} sx={{ p: 4, my: 6 }}>
        <Typography variant='h4' color='primary'>
          Testing
        </Typography>
        <Button variant='gradient'>Woo fun</Button>
      </Paper>
      <Paper elevation={2} sx={{ p: 4, my: 6 }}>
        <Typography variant='h4' color='primary'>
          Testing
        </Typography>
        <Button variant='gradient'>Woo fun</Button>
      </Paper>
      <Paper elevation={2} sx={{ p: 4, my: 6 }}>
        <Typography variant='h4' color='primary'>
          Testing
        </Typography>
        <Button variant='gradient'>Woo fun</Button>
      </Paper>
      <Paper elevation={2} sx={{ p: 4, my: 6 }}>
        <Typography variant='h4' color='primary'>
          Testing
        </Typography>
        <Button variant='gradient'>Woo fun</Button>
      </Paper>
    </Box>
  );
}
