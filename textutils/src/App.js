import './App.css';
import Navbar from './components/Navbar';
// import TextBox from './components/TextBox';
import About from './components/About';

function App() {
  return (
    <>
    {/* <Navbar  forLogo = "LOGO"/ > */}
      <div className='container my-3'>
      {/* <TextBox  heading="Heading goes here"/> */}
      <About/>
      </div>
    </>
  );
}

export default App;