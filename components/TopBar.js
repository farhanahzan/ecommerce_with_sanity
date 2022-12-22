import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import ListItems from './ListItems';
import Logo from './Logo';
import TopBarMenu from './TopBarMenu';

const contactDetails = {
  phoneNo: '+94715295425',
  email: 'info@chettybazzar.lk',
};

function TopBar() {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ backgroundColor: 'primary.main', py: 0 }}
      >
        <Grid
          container
          flexDirection={{ xs: 'row-reverse', sm: 'row' }}
          spacing={2}
        >
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { xs: 'flex-end', sm: 'flex-start' },
              alignItems: 'center',
            }}
            item
            xs={4}
            sm={6}
          >
            <ListItems contactDetails={contactDetails} />
          </Grid>
          <Grid
            sx={{
              flexDirection: 'row',
              justifyContent: { sm: 'flex-end', xs: 'flex-start' },
              alignItems: 'center',
              display: { xs: 'none', sm: 'flex' },
            }}
            item
            xs={6}
            sm={6}
          >
            <TopBarMenu />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              flexDirection: 'row',
              justifyContent: { sm: 'flex-end', xs: 'flex-start' },
              alignItems: 'center',
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            <Logo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TopBar;
