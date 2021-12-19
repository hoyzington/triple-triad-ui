import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './game/Game';

function MainContainer() {
    return (
        <div id='body-container'>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/game" element={<Game />}/>
            </Routes>
        </div>
    );
} 

export default MainContainer;

// import React, { useState } from 'react';
// import { DashboardComponent } from './components/DashboardComponent';
// import { LoginComponent } from './components/LoginComponent';
// import { Principal } from './models/Principal';
// import HomeComponent from './components/HomeComponent';

//   let [authUser, setAuthUser] = useState(undefined as Principal | undefined);

//   return (
//     <Routes>
//       <Route path="/" element={<HomeComponent />} />
//       <Route path="/login" element={<LoginComponent currentUser={authUser} setCurrentUser={setAuthUser}/>} />
//       <Route path="/dashboard" element={<DashboardComponent currentUser={authUser}/>} />
//       <Route path="/*" element={<HomeComponent />} />
//     </Routes>
//   );
// }
