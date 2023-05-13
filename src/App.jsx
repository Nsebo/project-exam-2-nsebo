import { useState } from 'react';
import Signup from './authentication/Signup/Signup.jsx';
import Login from './authentication/Login/Login.jsx';
import Profile from "./pages/profile/Profile.jsx";
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='signup' element={<Signup />} />
                <Route path='login' element={<Login />} />
                <Route path='profile' element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
