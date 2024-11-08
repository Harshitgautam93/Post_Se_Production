// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ContentManagement from './components/ContentManagement';
import ListingEditor from './components/ListingEditor';
import Analytics from './components/Analytics';
import Notifications from './components/Notifications';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/content-management" element={<ContentManagement />} />
              <Route path="/listing-editor" element={<ListingEditor />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
