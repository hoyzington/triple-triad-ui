import './App.css';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DashboardComponent } from './components/DashboardComponent';
import { LoginComponent } from './components/LoginComponent';
import { Principal } from './models/Principal';
import HomeComponent from './components/HomeComponent';

function App() {

  let [authUser, setAuthUser] = useState(undefined as Principal | undefined);

  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/login" element={<LoginComponent currentUser={authUser} setCurrentUser={setAuthUser}/>} />
      <Route path="/dashboard" element={<DashboardComponent currentUser={authUser}/>} />
      <Route path="/*" element={<HomeComponent />} />
    </Routes>
  );
}

export default App;
