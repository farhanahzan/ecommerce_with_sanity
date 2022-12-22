import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/theme';
import TopBar from '../components/TopBar';
theme;
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      HeroBanner
      <div>
        <h2>Best selling Products</h2>
        <p>Speakers of many variation</p>
      </div>
      <div>['Product 1','Product 1','Product 1','Product 1','Product 1']</div>
      Footer
    </ThemeProvider>
  );
};

export default Home;
