import { useState } from 'react'
import Signup from "./authentication/Signup/Signup.jsx";
import Login from "./authentication/Login/Login.jsx";
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Routes>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>



    </div>
  )
}

export default App
