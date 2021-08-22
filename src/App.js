import React from 'react';
import './components/_settings/_base.css';
import styles from './App.css';
import DicesContainer from './components/templates/Dices';
import Board from './components/pages/Board';

function App() {
  return (
    <div className={styles.app}>
      <Board />
      {/* <DicesContainer /> */}
    </div>
  );
}

export default App;
