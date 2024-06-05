import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
//import About from './components/About';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [btnTxt, setBtnTxt] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
           setAlert({
            msg:message,
            type:type
           })
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode("dark");
      setBtnTxt("Disable Dark Mode");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "Success");
    }
    else{
      setMode("light")
      setBtnTxt("Enable Dark Mode")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "Success");
    }
  };

  return (
    <>
    <Navbar  forLogo = "LOGO" mode = {mode} toggleMode={toggleMode} btnTxt={btnTxt}/>
    <Alert alert={alert} />
      <div className='container my-3'>
      <TextBox  heading="Heading goes here" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;