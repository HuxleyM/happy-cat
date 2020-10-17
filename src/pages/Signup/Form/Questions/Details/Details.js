import React, { useState, useContext } from "react";
import Styles from "./Details.module.css";
import * as utils from "./utils";
import { UserContext } from "../../../../../Context/userContext";
import Button from "../../../../../Components/Button/Button";

function Details(props) {
//   const { user, setUser } = useContext(UserContext);

  const [errors, setErrors] = useState({});
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRetype, setPasswordRetype] = useState('')
  const [email, setEmail] = useState('')
  const [emailRetype, setEmailRetype] = useState('')

 const handleUserNameChange = (event) => {
     setUserName(event.target.value)
 }

 const handleEmailChange = (event) => {
    setEmail(event.target.value)
 }

 const handleEmailRetypeChange = (event) => {
    setEmailRetype(event.target.value)
 }

 const handlePasswordChange = (event) => {
    setPassword(event.target.value)
 }

 const handlePasswordRetypeChange = (event) => {
    setPasswordRetype(event.target.value)
 }

  const handleFormSubmission = (e) => {
    e.preventDefault();
  
    
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={Styles.flexContainer}>
        <div>
          <div className={Styles.questionWrapper}>
            <label htmlFor="userName">User name:</label>
            <div>
              <input type="text" id="userName" name="userName"  value={userName} onChange={handleUserNameChange}required></input>
              {errors.username && (
                <div className={Styles.inputError}>emails do not match</div>
              )}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="email">Email:</label>
            <div>
              <input type="email" id="email" name="email" required  value={email} onChange={handleEmailChange}></input>
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
                onChange={handleEmailRetypeChange}
                value={emailRetype}
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
                onChange={handlePasswordChange}
                value={password}
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
                onChange={handlePasswordRetypeChange}
                value={passwordRetype}
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
      <Button state="success" text="save and next"></Button>
    </form>
  );
}

export default Details;
