import React, {useState, useMemo} from 'react';
import './App.css';
import Styles from'./App.module.css';
import { UserContext } from './Context/userContext';
import Signup from './Signup/Signup'

function App() {
    const [user, setUser] = useState({
        completed: false,
    })
    const providerValue = useMemo(() => ({user, setUser}),[user,setUser]);
  return (
    <div className="App">
        <UserContext.Provider value={providerValue}>
            <header className={Styles.mainHeader}>
                <h1>HappyCat.</h1>
            </header>
            <body className={Styles.mainBody}>
                <Signup/>
            </body>
        </UserContext.Provider>
    </div>
  );
}

export default App;
