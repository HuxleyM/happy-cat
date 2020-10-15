import React,{useContext} from 'react';
import Styles from './Signup.module.css';
import Form from './Form/Form';
import Confirmation from './Confirmation/Confirmation'
import {UserContext} from '../Context/userContext'

function Signup(){
    const {user,setUser} = useContext(UserContext)
    console.log('heya', user)
    
    return (
        <div className={Styles.signUpWrapper}>
            {!user && <div>Loading</div>} 
            {user.completed ? <Confirmation/>: <Form/>}
        </div>
    )
}

export default Signup