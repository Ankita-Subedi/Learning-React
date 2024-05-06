import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
// import About from './components/About';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [btnTxt, setBtnTxt] = useState('Enable Dark Mode');

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode("dark");
      setBtnTxt("Disable Dark Mode");
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode("light")
      setBtnTxt("Enable Dark Mode")
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
    <Navbar  forLogo = "LOGO" mode = {mode} toggleMode={toggleMode} btnTxt={btnTxt}/>
      <div className='container my-3'>
      <TextBox  heading="Heading goes here"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;