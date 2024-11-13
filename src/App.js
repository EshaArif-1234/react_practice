import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(false);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#424242';
      document.body.style.color = 'white';
      setAlert(true);
      showAlert("Dark mode has been enable","success")

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setAlert(true);

      showAlert("light mode has been enable","success")

    }
  }

  const showAlert = (messge,type) =>{
     setAlert({
      msg:messge,
      type:type
     })
  }

  return (
    <React.Fragment>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className='container' >
        <Alert alert={alert} />
        {/* <About /> */}
        <Form mode={mode} />
      </div>
    </React.Fragment>
  );
}

export default App;
