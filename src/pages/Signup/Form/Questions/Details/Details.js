import React, { useState, useContext } from "react";
import Styles from "./Details.module.css";
import * as utils from "./Details";
import { UserContext } from '../../../../../Context/userContext';

export const validEmail = () => {
  const email = document.getElementById("email").value;
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
  return !!email.match(emailRegex);
};

export const collectUserDetails = () => {
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    return {userName, password, email}
}

export const validPassword = () => {
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*\d)(?=.*\W).{8,}$/g;
  return !!password.match(passwordRegex);
};

export const checkFieldsMatch = ({first, second}) => {
  const firstValue = document.getElementById(`${first}`).value;
  const secondValue = document.getElementById(`${second}`).value;
  return (firstValue === secondValue)
};

function Details(props) {
  const {user, setUser} = useContext(UserContext)
  const [errors, setErrors] = useState({});

  const setErrorsSwitch = ({field, mode}) =>{
    switch(field){
        case 'password':   
            if(mode === 'ADD'){
                setErrors({...errors, password: 'This is not a valid password, include digits, special chars and be at least 8 digits long'})
            }
            let passwordErrors = {...errors}
            delete passwordErrors.password
            setErrors({...passwordErrors})
            break;
        case 'email':
            if(mode === 'ADD'){
                setErrors({...errors, email: 'This is not a valid email'})
            }
            let emailErrors = {...errors}
            delete emailErrors.email
            setErrors({...emailErrors})
            break;
        case 'emailRetype':
            if(mode === 'ADD'){
                setErrors({...errors, emailRetype: 'Emails do not match'})
            }
            let emailRErrors = {...errors}
            delete emailRErrors.emailRErrors
            setErrors({...emailRErrors})
            break
        case 'passwordRetype':
            if(mode === 'ADD'){
                setErrors({...errors, passwordRetype: 'Password do not match'})
            }
            let passwordReErrors = {...errors}
            delete passwordReErrors.passwordReErrors
            setErrors({...passwordReErrors})

            break
        default:
            return
    }
}
  
  const runChecks = () => {
    if (!utils.validPassword()) setErrorsSwitch({field:'password', mode:'ADD'})
    if (!utils.validEmail()) setErrorsSwitch({field:'email', mode:'ADD'})
    if (!utils.checkFieldsMatch({first:'email', second:'emailRetype'})) setErrorsSwitch({field:'emailRetype', mode:'ADD'})
    if (!utils.checkFieldsMatch({first:'password', second:'passwordRetype'})) setErrorsSwitch({field:'passwordRetype', mode:'ADD'})
}

   const handleFormSubmission = (errors) => {
    runChecks()
    if(errors) return 
    let userDetails = utils.collectUserDetails()
    setUser({...user, userDetails})
    let questionsAnswered = user.questionsAnswered += 1
    let currentlyOnQuestion = user.currentlyOnQuestion += 1
    setUser({...user, questionsAnswered, currentlyOnQuestion})
};



 

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmission();
      }}
    >
      <div className={Styles.flexContainer}>
        <div>
          <div className={Styles.questionWrapper}>
            <label htmlFor="userName">User name:</label>
            <div>
              <input type="text" id="userName" name="userName" required></input>
              {errors.username && <div>{errors.username.error}</div>}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="email">Email:</label>
            <div>
              <input type="email" id="email" name="email" required></input>
              {errors.email && <div>{errors.email.error}</div>}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="emailRetype">Retype email:</label>
            <div>
              <input
                type="email"
                id="emailRetype"
                name="emailRetype"
                required
              ></input>
              {errors.emailRetype && <div>{errors.emailRetype.error}</div>}
            </div>
          </div>
        </div>

        <div>
          <div className={Styles.questionWrapper}>
            <div>
              <label htmlFor="password">Password:</label>
              <p className={Styles.passwordInstructions}>
                Password must contain at least 8 digits, a special character and
                a number.
              </p>
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                required
              ></input>
              {errors.password && <div>{errors.password.error}</div>}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="passwordRetype">Retype password:</label>
            <div>
              <input
                type="password"
                id="passwordRetype"
                name="passwordRetype"
                required
              ></input>
              <div>
                {errors.passwordRetype && (
                  <div>{errors.passwordRetype.error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <input type="submit" id="submitDetailsForm" value="Save and next"></input>
    </form>
  );
}

export default Details;
