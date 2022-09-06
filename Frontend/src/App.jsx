import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import User from "./pages/User/User"
import Manager from "./pages/Manager/Manager";
import ManPub from "./pages/ManPub/ManPub";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";

function App() {
    const [isLoggedIn, setLog] = useState(false);
    const [email, setEmail] = useState("");
    function LogIn(email){
        setEmail(email);
        setLog(true);
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/login" element={<div><Navbar /><Login LogIn={LogIn}/></div>} />
                <Route path="/register" element={<div><Navbar /><Register LogIn={LogIn}/></div>} />
                <Route path="/user" element={<div><User isLoggedIn={isLoggedIn} email={email}/></div>} />
                <Route path="/manager" element={<div><Manager isLoggedIn={isLoggedIn} email={email}/></div>} />
                <Route path="/manPub" element={<div><ManPub isLoggedIn={isLoggedIn} email={email}/></div>} />
            </Routes>
        </Router>
    );
};

export default App;