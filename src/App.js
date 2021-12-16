import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      {/* <Route exact path="/" /> */}
      <MainContainer />
      <Footer />
    </Router>
  );
}

export default App;
