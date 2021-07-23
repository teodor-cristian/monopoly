import React from 'react';
import './components/_settings/_base.css';
import './App.css';
import DicesContainer from './components/templates/Dices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DicesContainer />
      </header>
    </div>
  );
}

export default App;
