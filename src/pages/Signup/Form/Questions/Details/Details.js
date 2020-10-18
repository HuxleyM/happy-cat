import React, { useState, useContext, useRef, useReducer } from "react";
import Styles from "./Details.module.css";
import * as utils from "./utils";
import { UserContext } from "../../../../../Context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function errorsReducer(state, { key, error, message = "" }) {
  if (error) {
    state[key] = message;
  } else {
    delete state[key];
  }
  return state;
}

function Details({ handleFormSubmission }) {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useReducer(errorsReducer, {});
  const [answers, setAnswers] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  const userNameField = useRef();
  const passwordField = useRef();
  const passwordRetypeField = useRef();
  const emailField = useRef();
  const emailRetypeField = useRef();

  /// i d love to tidy this but do not know how to
  const isDisabled = () => {
    const errorAsArray = Object.keys(errors).length;
    const answersAsArray = Object.keys(answers).length;
    // disbaled needs false flag to disable and true to not 
    const usable = (errorAsArray === 0 && answersAsArray === 5) ? false : true;
  
    return (
      <button
        type="submit"
        disabled={usable}
        className={`${Styles.mainActionButton} `}
      >
        Save and next
      </button>
    );
  };

  // ---------------------------------------------------------------------- handle changes
  const handleUserNameChange = () => {
    setAnswers({ ...answers, userName: userNameField.current.value });
  };

  const handleEmailChange = () => {
    const reducerProps = !utils.validEmail(emailField.current.value)
      ? { error: true, key: "email", message: "This is not a valid email." }
      : { error: false, key: "email" };
    errorsReducer(errors, reducerProps);
    setAnswers({ ...answers, email: emailField.current.value });
  };

  const handleEmailRetypeChange = () => {
    const reducerProps =
      emailField.current.value !== emailRetypeField.current.value
        ? { error: true, key: "emailRetype", message: "Emails do not match." }
        : { error: false, key: "emailRetype" };
    errorsReducer(errors, reducerProps);
    setAnswers({ ...answers, emailRetype: emailRetypeField.current.value });
  };

  const handlePasswordChange = () => {
    const reducerProps = !utils.validPassword(passwordField.current.value)
      ? {
          error: true,
          key: "password",
          message: "This is not a valid password.",
        }
      : { error: false, key: "password" };
    errorsReducer(errors, reducerProps);
    setAnswers({ ...answers, password: passwordField.current.value });
  };

  const handlePasswordRetypeChange = () => {
    const reducerProps =
      passwordField.current.value !== passwordRetypeField.current.value
        ? {
            error: true,
            key: "passwordRetype",
            message: "Password do not match.",
          }
        : { error: false, key: "passwordRetype" };
    errorsReducer(errors, reducerProps);
    setAnswers({
      ...answers,
      passwordRetype: passwordRetypeField.current.value,
    });
  };

  // on change happens every click safe to assume this is working
  const detailsAnswers = () => {
    const { userName, email, password } = answers;
    setUser({ ...user, userName, email, password });
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
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
                onChange={handleUserNameChange}
                value={user.userName}
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
                value={user.email}
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
                value={user.email}
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
                <div className={Styles.inputError}>{errors.password}</div>
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
                    {errors.passwordRetype}
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
