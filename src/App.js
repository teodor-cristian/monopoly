import React from 'react';
import './components/_settings/_base.css';
import styles from './App.css';
import Board from './components/pages/Board';

function App() {
  return (
    <div className={styles.app}>
      <Board />
    </div>
  );
}

export default App;
