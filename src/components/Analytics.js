// src/components/Analytics.js
import React from 'react';
import { Typography, Container } from '@mui/material';
import '../styles/Analytics.css';

function Analytics() {
  return (
    <Container className="analytics">
      <Typography variant="h5" gutterBottom>Analytics</Typography>
      <p>Display analytics data and performance metrics here.</p>
    </Container>
  );
}

export default Analytics;
