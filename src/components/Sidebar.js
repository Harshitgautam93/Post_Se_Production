// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/content-management">
          <ListItemText primary="Content Management" />
        </ListItem>
        <ListItem button component={Link} to="/listing-editor">
          <ListItemText primary="Listing Editor" />
        </ListItem>
        <ListItem button component={Link} to="/analytics">
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button component={Link} to="/notifications">
          <ListItemText primary="Notifications" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
