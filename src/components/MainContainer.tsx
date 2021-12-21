import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Principal from './models/Principal';
import Brand from './Brand';
import Home from './Home';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import Game from './game/Game';
import PrincipalExtension from "../models/PrincipalExtension";
import { LoginComponent } from '../components/user/LoginComponent';
import { Dashboard } from './Dashboard';
import { RegisterComponent } from '../components/user/RegisterComponent';
import Collection from './collection/Collection';

export default function MainContainer() {
  // let [authUser, setAuthUser] = useState(undefined as Principal | undefined);
  let [aUser, setAUser] = useState(undefined as PrincipalExtension | undefined);

  return (
    <div id="main-container">
      <Brand />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginComponent aUser={aUser} setAUser={setAUser}/>} />
        <Route path="/register" element={<RegisterComponent aUser={aUser} setAUser={setAUser}/>} />
        <Route path="/dashboard" element={<Dashboard aUser={aUser} setAUser={setAUser}/>} />
        <Route path="/game" element={<Game />}/>
        <Route path="/collection" element={<Collection />}/>
      </Routes>
    </div>
  );
} 
