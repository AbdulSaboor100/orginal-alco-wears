import React from 'react';
import './App.css';
import Routes from './configs/routes';
import ContextProvider from './context/context';
import Home from './screens/home';

function App() {
  return (
    <div className="App"> 
    <ContextProvider>
      <Routes />
    </ContextProvider>
      
    </div>
  );
}

export default App;
