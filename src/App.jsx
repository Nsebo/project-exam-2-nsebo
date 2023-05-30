import { useState } from 'react';
import Signup from './authentication/Signup/Signup.jsx';
import Login from './authentication/Login/Login.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Venues from './pages/Venues/Venues.jsx';
import Venue from './pages/Venue/Venue.jsx';
import CreateVenue from './components/CreateVenue/CreateVenue.jsx';
import VenueManager from './pages/VenueManager/VenueManager.jsx';

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='signup' element={<Signup />} />
                <Route path='login' element={<Login />} />
                <Route path='/venues' element={<Venues />} />
                <Route path='/my-venues' element={<VenueManager />} />
                <Route path='/create-venues' element={<CreateVenue />} />
                <Route path='/venue/:venueId' element={<Venue />} />
            </Routes>
        </div>
    );
}

export default App;
