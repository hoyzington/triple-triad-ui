import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <div id='main'>
        <NavBar />
        <MainContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
