// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <Container className="dashboard">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Link to="/content-management">
        <Button variant="contained" color="primary">Content Management</Button>
      </Link>
      <Link to="/listing-editor">
        <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
          Listing Editor
        </Button>
      </Link>
      <Link to="/analytics">
        <Button variant="contained" color="info" style={{ marginLeft: '10px' }}>
          Analytics
        </Button>
      </Link>
      <Link to="/notifications">
        <Button variant="contained" color="success" style={{ marginLeft: '10px' }}>
          Notifications
        </Button>
      </Link>
    </Container>
  );
}

export default Dashboard;
