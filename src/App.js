import React from 'react';
import './components/_settings/_base.css';
import './App.css';
import Dice from './components/organisms/Dice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="test">
          Test
        </p>
        <Dice />
      </header>
    </div>
  );
}

export default App;
