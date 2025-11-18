import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, left: 0, right: 0 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: '#d8eacc',
          color: '#000',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Guthaben: 100$
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
