import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { VenueProvider } from './context/venue-context.jsx';
import { AuthProvider } from './context/auth-context.jsx';
import { LoginProvider } from './context/login-context.jsx';
import { BookingProvider } from './context/bookings-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoginProvider>
          <VenueProvider>
            <BookingProvider>
              <App />
            </BookingProvider>
          </VenueProvider>
        </LoginProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
