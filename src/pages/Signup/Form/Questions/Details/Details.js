import React, { useState, useContext, useRef, useEffect } from "react";
import Styles from "./Details.module.css";
import * as utils from "./utils";
import { UserContext } from "../../../../../Context/userContext";

function Details({formProgress,setFormProgress}) {
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

  const isDisabled = () => {


    const errorAsArray = Object.keys(errors).length;
    console.log(errorAsArray)

    console.log(  userName,
        password,
        passwordRetype,
        emailRetype,
        email,
        !errorAsArray)
    console.log( (
        userName &&
        password &&
        passwordRetype &&
        emailRetype &&
        email &&
        !errorAsArray
      ))

    if (
      userName &&
      password &&
      passwordRetype &&
      emailRetype &&
      email 
      &&
      !errorAsArray
    ) {
      return (
        <button type="submit" className={`${Styles.mainActionButton} `}>
          Save and next
        </button>
      );
    }
    return (
      <button type="submit"  disabled className={`${Styles.mainActionButton} `}>
        Save and next
      </button>
    );
  };

  const ifExistingErrorsDelete = ({ key }) => {
    if (errors[key]) {
      const newErrors = { ...errors };
      delete newErrors[key];
      setErrors({ ...newErrors });
    }
  };

  const handleEmailChange = () => {
    if (!utils.validEmail(emailField.current.value)) {
      setErrors({ ...errors, email: "This is not a valid email." });
    } else {
      setEmail(emailField.current.value);
      ifExistingErrorsDelete({ key: "email" });
    }
  };

  const handleEmailRetypeChange = () => {
    if (emailField.current.value !== emailRetypeField.current.value) {
      setErrors({ ...errors, emailRetype: "Emails do not match." });
    } else {
      setEmailRetype(emailRetypeField.current.value);
      ifExistingErrorsDelete({ key: "emailRetype" });
    }
  };

  const handlePasswordChange = () => {
    if (!utils.validPassword(passwordField.current.value)) {
      setErrors({ ...errors, password: "This is not a valid password." });
    } else {
      setPassword(passwordField.current.value);
      ifExistingErrorsDelete({ key: "password" });
    }
  };

  const handlePasswordRetypeChange = () => {
    if (passwordField.current.value !== passwordRetypeField.current.value) {
      setErrors({ ...errors, passwordRetype: "Password do not match." });
    } else {
      setPasswordRetype(passwordRetypeField.current.value);
      ifExistingErrorsDelete({ key: "passwordRetype" });
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    setUser({ ...user, userName, email, password })

    let newQuestionedAnswered = (formProgress.questionsAnswered += 1);
    let newCurrentlyOn = (formProgress.currentlyOnQuestion += 1);
    setFormProgress({
        ...formProgress,
        questionsAnswered: newQuestionedAnswered,
        currentlyOnQuestion: newCurrentlyOn,
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

      {isDisabled()}
    </form>
  );
}

export default Details;
