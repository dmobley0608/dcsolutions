import React from 'react';
import Background from './components/Background/Background';
import Greeting from './components/Greeting/Greeting'
import './App.css';
import GridMenu from './components/GridMenu/GridMenu';

function App() {
  return (
    <div className="App">
       <Background/>   
      <Greeting /> 
      <GridMenu/>   
    </div>
  );
}

export default App;
