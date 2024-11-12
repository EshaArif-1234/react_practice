import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
      <>
      
      <Navbar />
      <div className='container' >
      {/* <About /> */}
      <Form />
      </div>
      </>
  );
}

export default App;
