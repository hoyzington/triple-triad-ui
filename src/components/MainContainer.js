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
