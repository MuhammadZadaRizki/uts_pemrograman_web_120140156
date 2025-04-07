import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage';
import SquadPage from './pages/SquadPage';
import PlayerDetailPage from './pages/PlayerDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { TeamProvider } from './TeamContext.jsx';
import Navbar from './Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeamProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/squad" element={<SquadPage />} />
          <Route path="/player/:id" element={<PlayerDetailPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </TeamProvider>
  </React.StrictMode>
);
