import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import About from './components/About';
import React, {useState} from 'react';
// import { Router } from 'react-router-dom';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [btnTxt, setBtnTxt] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
           setAlert({
            msg:message,
            type:type

          })
          setTimeout(() => {
            setAlert(null)
          }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode("dark");
      setBtnTxt("Disable Dark Mode");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils-Dark Mode';
    }
    else{
      setMode("light")
      setBtnTxt("Enable Dark Mode")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils-Dark Mode';
    }
  };

  return (
    <>
      {/* <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textbox
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter> */}

<Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextBox showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;