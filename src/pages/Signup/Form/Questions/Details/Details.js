import React, { useState, useContext, useRef, useEffect } from "react";
import Styles from "./Details.module.css";
import * as utils from "./utils";
import { UserContext } from "../../../../../Context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function errorsReducer(state, setErrors, { key, error }) {
  if (error && state[key]) {
    return;
  } else if (error && !state[key]) {
    state[key] = true;
    setErrors({ ...state });
  } else if (!error && state[key]) {
    state[key] = false;
    setErrors({ ...state });
  } else {
    return;
  }
}

function Details({ handleFormSubmission }) {
  const { user, setUser } = useContext(UserContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState({
    email: undefined,
    emailRetype: undefined,
    password: undefined,
    passwordRetype: undefined,
  });

  const userNameField = useRef();
  const emailField = useRef();
  const emailRetypeField = useRef();
  const passwordField = useRef();
  const passwordRetypeField = useRef();

  const isDisabled = () => {
    let formComplete = true;
    for (const field in errors) {
      if (errors[field] !== false) formComplete = false;
    }
    // disables must be provided false to be disabled
    return (
      <button
        type="submit"
        disabled={!formComplete}
        className={`${Styles.mainActionButton} `}
      >
        Save and next
      </button>
    );
  };

  // ---------------------------------------------------------------------- handle changes

  const handleEmailChange = () => {
    const reducerProps = !utils.validEmail(emailField.current.value)
      ? { error: true, key: "email" }
      : { error: false, key: "email" };
    errorsReducer(errors, setErrors, reducerProps);
    if(emailRetypeField.current.value){
        handleEmailRetypeChange()
    }
  };

  const handleEmailRetypeChange = () => {
    const reducerProps =
      emailField.current.value !== emailRetypeField.current.value
        ? { error: true, key: "emailRetype" }
        : { error: false, key: "emailRetype" };
    errorsReducer(errors, setErrors, reducerProps);
  };
  const handlePasswordChange = () => {
    const reducerProps = !utils.validPassword(passwordField.current.value)
      ? {
          error: true,
          key: "password",
        }
      : { error: false, key: "password" };
      // if value in retype but error caused by faulty original value
      if(passwordRetypeField.current.value){
        handlePasswordRetypeChange()
      }
    errorsReducer(errors, setErrors, reducerProps);
  };

  const handlePasswordRetypeChange = () => {
    const reducerProps =
      passwordField.current.value !== passwordRetypeField.current.value
        ? {
            error: true,
            key: "passwordRetype",
          }
        : { error: false, key: "passwordRetype" };
    errorsReducer(errors, setErrors, reducerProps);
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // on change handles validation safe to assume can not get here if fault
  const detailsAnswers = () => {
    setUser({
      ...user,
      userName: userNameField.current.value,
      email: emailField.current.value,
      password: passwordField.current.value,
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleFormSubmission(detailsAnswers);
      }}
    >
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
                value={user.userName}
                required
              ></input>
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
                value={user.email}
                onChange={handleEmailChange}
              ></input>
              {errors.email && (
                <div className={Styles.inputError}>
                  This is not a valid email.
                </div>
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
                value={user.email}
                onChange={handleEmailRetypeChange}
                required
              ></input>
              {errors.emailRetype && (
                <div className={Styles.inputError}>Emails do not match.</div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className={Styles.questionWrapper}>
            <div>
              <label htmlFor="password">Password:</label>
              <span
                className={Styles.passwordVisibility}
                onClick={() => togglePasswordVisiblity()}
              >
                <FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash} />
              </span>
              <p className={Styles.passwordInstructions}>
                Password must contain at least 8 digits, a special character and
                a number.
              </p>
            </div>
            <div>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                name="password"
                ref={passwordField}
                value={user.password}
                onChange={handlePasswordChange}
                required
              ></input>
              {errors.password && (
                <div className={Styles.inputError}>
                  This is not a valid password.
                </div>
              )}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="passwordRetype">Retype password:</label>
            <div>
              <input
                type={passwordShown ? "text" : "password"}
                id="passwordRetype"
                name="passwordRetype"
                ref={passwordRetypeField}
                value={user.password}
                onChange={handlePasswordRetypeChange}
                required
              ></input>
              <div>
                {errors.passwordRetype && (
                  <div className={Styles.inputError}>
                    {" "}
                    Password do not match.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.moveToEnd}>{isDisabled()}</div>
    </form>
  );
}

export default Details;
