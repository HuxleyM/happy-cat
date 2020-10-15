import React from 'react';
import './App.css';
import Styles from'./App.module.css';
import Signup from './Signup/Signup'

function App() {
  return (
    <div className="App">
        <header className={Styles.mainHeader}>
            <h1>HappyCat.</h1>
        </header>
        <Signup/>
    </div>
  );
}

export default App;
