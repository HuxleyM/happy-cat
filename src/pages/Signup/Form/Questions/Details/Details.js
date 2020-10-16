import React, { useState } from "react";
import Styles from "./Details.module.css";
import * as utils from './Details'

export const handleFormSubmission = () => {
    if(validPassword()){
        
    }
};

export const validPassword = () => {
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*\d)(?=.*\W).{8,}$/g
    // if (!password.match(passwordRegex)) {
    //     return {...errors, password: 'This is not a valid password, include digits, special chars and be at least 8 digits long'}
    // } 
    // double here to return if theres a match or not
    return !!password.match(passwordRegex)
}


export const checkFieldsMatch = (errors, fields) => {
      const first = document.getElementById(`${fields.first}`).value;
      const second = document.getElementById(`${fields.second}`).value;
      if (first !== second) {
        const newErrors = {...errors}
        newErrors[`${fields.second}`] = { error: `${fields.first}'s do not match`}
        return newErrors
      } else {
          const current = { ...errors };
          if(current[`${fields.second}`]){
            delete current[`${fields.second}`];
          }
          return current;
      }
  };






function Details(props) {
  const [errors, setErrors] = useState({});
  const [formDetails, setFormDetails] = useState({})




  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        utils.handleFormSubmission();
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

      <input type="submit" id='submitDetailsForm' value="Save and next"></input>
    </form>
  );
}

export default Details;
