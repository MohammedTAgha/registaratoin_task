import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import { LogIn, Register  } from './Components';

function App() {
  const [isRegister, setIsRegister] = useState(true);

  const handleSwitch =() => {
    console.log("switching")
    setIsRegister(!isRegister);
  }

  return (
    <>
     {isRegister ? (
        <Register handleGoToLogIn={handleSwitch} />
      ) : (
        <LogIn handleGoToRegister={handleSwitch} />
      )}
    
    </>
    
  );
}

export default App;
