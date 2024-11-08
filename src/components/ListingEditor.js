// src/components/ListingEditor.js
import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import '../styles/ListingEditor.css';

function ListingEditor() {
  return (
    <Container className="listing-editor">
      <Typography variant="h5" gutterBottom>Listing Editor</Typography>
      <TextField label="Title" variant="outlined" fullWidth />
      <TextField label="Description" variant="outlined" fullWidth multiline rows={4} style={{ marginTop: '20px' }} />
      <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
        Save Listing
      </Button>
    </Container>
  );
}

export default ListingEditor;
