import React,{useContext} from 'react';
import Styles from './Signup.module.css';
import {UserContext} from '../Context/userContext'

function Signup(){
    const {completed} = useContext(UserContext)
    // logic for which component to render
    return (
        <div className={Styles.signUpWrapper}>
            
        </div>
    )
}

export default Signup