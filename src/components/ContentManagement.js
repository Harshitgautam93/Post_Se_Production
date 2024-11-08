// src/components/ContentManagement.js
import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import '../styles/ContentManagement.css';

function ContentManagement() {
  return (
    <Container className="content-management">
      <Typography variant="h5" gutterBottom>Content Management</Typography>
      <TextField label="Social Media URL" variant="outlined" fullWidth />
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Extract Content
      </Button>
    </Container>
  );
}

export default ContentManagement;
