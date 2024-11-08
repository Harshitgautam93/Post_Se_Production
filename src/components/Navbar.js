// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Social to Amazon Converter</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
