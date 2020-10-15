import React,{useContext} from 'react';
import Styles from './Signup.module.css';
import Form from './Form/Form';
import Confirmation from './Confirmation/Confirmation'
import Loading from './Loading/Loading'
import {UserContext} from '../../Context/userContext'

const selectComponent = (user) => {
    if(!user) return <Loading/>
    if(user.completed) return <Confirmation/>
    if(!user.completed) return <Form/>
}

function Signup(){
    const {user,setUser} = useContext(UserContext)
    const ComponentToDisplay = selectComponent(user)
    
    return (
        <div className={Styles.signUpWrapper}>
            {ComponentToDisplay}
        </div>
    )
}

export default Signup