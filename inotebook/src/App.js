import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Home/>
      <Routes>
          <Route exact path="/home">
            element={<Home />}
          </Route>
          <Route exact path="/about">
            element={<About />}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
