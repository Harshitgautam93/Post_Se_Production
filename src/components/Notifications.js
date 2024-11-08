// src/components/Notifications.js
import React from 'react';
import { Typography, Container } from '@mui/material';
import '../styles/Notifications.css';

function Notifications() {
  return (
    <Container className="notifications">
      <Typography variant="h5" gutterBottom>Notifications</Typography>
      <p>Display notifications and alerts here.</p>
    </Container>
  );
}

export default Notifications;
