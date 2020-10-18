import React, { useState, useMemo } from 'react';
import './App.css';
import Styles from './App.module.css';
import { UserContext } from './Context/userContext';
import Signup from './pages/Signup/Signup';
import ErrorBoundary from './ErrorBoundary'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCat } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [user, setUser] = useState({
    completed: false,
  });
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <UserContext.Provider value={ providerValue }>
        <ErrorBoundary>
        <header className={ Styles.mainHeader }>
          <h1>HappyCat.<span>                <FontAwesomeIcon icon={faCat} /></span></h1>
        </header>
        <main className={ Styles.mainBody }>

          <Signup />
        </main>
        </ErrorBoundary>
      </UserContext.Provider>
    </div>
  );
}

export default App;
