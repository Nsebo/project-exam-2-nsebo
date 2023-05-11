import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { VenueProvider } from './context/venue-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <BrowserRouter>
            <VenueProvider>
                <App />
            </VenueProvider>
        </BrowserRouter>
    </React.StrictMode>
)
