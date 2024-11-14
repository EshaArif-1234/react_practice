import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import React, { useState } from 'react';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(false);
  const showAlert = (messge, type) => {
    setAlert({
      msg: messge,
      type: type
    })
    // setTimeout(() => setAlert(null),3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#424242';
      document.body.style.color = 'white';
      setAlert(true);
      showAlert("Dark mode has been enable", "success")

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setAlert(true);

      showAlert("light mode has been enable", "success")

    }
  };
  const closeAlert = () => {
    setAlert(null);
  };



  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className='container'>
        {alert && <Alert alert={alert} onClose={closeAlert} />}
        
        <Routes>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/" element={<Form mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
