import React, { useState, useContext, useRef, useEffect } from "react";
import Styles from "./Details.module.css";
import * as utils from "./utils";
import { UserContext } from "../../../../../Context/userContext";
import Button from "../../../../../Components/Button/Button";

function Details(props) {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");
  const [email, setEmail] = useState("");
  const [emailRetype, setEmailRetype] = useState("");

  const userNameField = useRef();
  const passwordField = useRef();
  const passwordRetypeField = useRef();
  const emailField = useRef();
  const emailRetypeField = useRef();


  const handleUserNameChange = () => {
    setUserName(userNameField.current.value);
  };

  const ifExistingErrorsDelete = ({key}) => {
    if (errors[key]) {
        const newErrors = { ...errors };
        delete newErrors[key];
        setErrors({ ...newErrors });
      }
  }

  const handleEmailChange = () => {
    setEmail(emailField.current.value);
    if (!utils.validEmail(emailField.current.value)) {
      setErrors({ ...errors, email: "This is not a valid email." });
    } else {
        ifExistingErrorsDelete({key:'email'})
    }
  };

  const handleEmailRetypeChange = () => {
    setEmailRetype(emailRetypeField.current.value);
    if (email !== emailRetype) {
      setErrors({ ...errors, emailRetype: "Emails do not match." });
    } else {
        ifExistingErrorsDelete({key:'emailRetype'})
    }
  };

  const handlePasswordChange = () => {
    setPassword(passwordField.current.value);
    if (!utils.validPassword(passwordField.current.value)) {
      setErrors({ ...errors, password: "This is not a valid password." });
    } else {
        ifExistingErrorsDelete({key:'password'})
    }
  };

  const handlePasswordRetypeChange = () => {
    setPasswordRetype(passwordRetypeField.current.value);
    if (password !== passwordRetype) {
      setErrors({ ...errors, passwordRetype: "Password do not match." });
    } else {
        ifExistingErrorsDelete({key:'Retype'})
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    setUser({ ...user, userName, email, password }, () => {
      let newQuestionedAnswered = (user.questionsAnswered += 1);
      let newCurrentlyOn = (user.currentlyOnQuestion += 1);
      setUser({
        ...user,
        questionsAnswered: newQuestionedAnswered,
        currentlyOnQuestion: newCurrentlyOn,
      });
    });
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={Styles.flexContainer}>
        <div>
          <div className={Styles.questionWrapper}>
            <label htmlFor="userName">User name:</label>
            <div>
              <input
                type="text"
                id="userName"
                name="userName"
                ref={userNameField}
                value={userName}
                onChange={handleUserNameChange}
                required
              ></input>
              {errors.username && (
                <div className={Styles.inputError}>emails do not match</div>
              )}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="email">Email:</label>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                ref={emailField}
                value={email}
                onChange={handleEmailChange}
              ></input>
              {errors.email && (
                <div className={Styles.inputError}>{errors.email}</div>
              )}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="emailRetype">Retype email:</label>
            <div>
              <input
                type="email"
                id="emailRetype"
                name="emailRetype"
                ref={emailRetypeField}
                onChange={handleEmailRetypeChange}
                value={emailRetype}
                required
              ></input>
              {errors.emailRetype && (
                <div className={Styles.inputError}>{errors.emailRetype}</div>
              )}
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
                ref={passwordField}
                onChange={handlePasswordChange}
                value={password}
                required
              ></input>
              {errors.password && (
                <div className={Styles.inputError}>{errors.password}</div>
              )}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="passwordRetype">Retype password:</label>
            <div>
              <input
                type="password"
                id="passwordRetype"
                name="passwordRetype"
                ref={passwordRetypeField}
                onChange={handlePasswordRetypeChange}
                value={passwordRetype}
                required
              ></input>
              <div>
                {errors.passwordRetype && (
                  <div className={Styles.inputError}>
                    {errors.passwordRetype}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type='submit' className={`${Styles.mainActionButton} `}>Save and next</button>
    </form>
  );
}

export default Details;
