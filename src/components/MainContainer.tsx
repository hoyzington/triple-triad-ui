// import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Principal from './models/Principal';
import Home from './Home';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import Game from './game/Game';

export default function MainContainer() {
    // let [authUser, setAuthUser] = useState(undefined as Principal | undefined);
    return (
        <div id='body-container'>
            <Routes>
                <Route path="/" element={<Home />}/>
                {/* <Route path="/login" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>} /> */}
                {/* <Route path="/dashboard" element={<Dashboard currentUser={authUser}/>} /> */}
                <Route path="/game" element={<Game />}/>
            </Routes>
        </div>
    );
} 
