import React, { useState, useContext, useRef } from "react";
import Styles from "./Details.module.css";
import * as utils from "./utils";
import { UserContext } from "../../../../../Context/userContext";
import PasswordFields from "./PasswordFields/PasswordFields";


function errorsReducer(state, setErrors,{ key, error, message = "" }) {
  if (error && !state[key]) {
    state[key] = message;
    setErrors({...state})
  } else if(!error && state[key]){
    delete state[key];
    setErrors({...state})
  } else{
      return
  }

}

function Details({ handleFormSubmission }) {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [answers, setAnswers] = useState({});

  const userNameField = useRef();
  const emailField = useRef();
  const emailRetypeField = useRef();

  /// i d love to tidy this but do not know how to
  // this can be its own componenet - ran out of time
  const isDisabled = () => {
    const errorAsArray = Object.keys(errors).length;
    const answersAsArray = Object.keys(answers).length;
    // disbaled needs false flag to disable and
    console.log(errorAsArray, answersAsArray)
    const usable = errorAsArray === 0 && answersAsArray === 4 ? false : true;
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

  const handleEmailChange = () => {
    const reducerProps = !utils.validEmail(emailField.current.value)
      ? { error: true, key: "email", message: "This is not a valid email." }
      : { error: false, key: "email" };
    errorsReducer(errors, setErrors, reducerProps);
    if (!errors.email) {
      setAnswers({ ...answers, email: emailField.current.value });
    }
  };

  const handleEmailRetypeChange = () => {
    const reducerProps =
      emailField.current.value !== emailRetypeField.current.value
        ? { error: true, key: "emailRetype", message: "Emails do not match." }
        : { error: false, key: "emailRetype" };
    errorsReducer(errors, setErrors, reducerProps);
    if (!errors.emailRetype) {
      setAnswers({ ...answers, emailRetype: emailRetypeField.current.value });
    }
  };

  // on change happens every click safe to assume this is working
  const detailsAnswers = () => {
    const { userName, email, password } = answers;
    setUser({ ...user, userName, email, password });
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
                defaultValue={user.userName}
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

        <PasswordFields
          errors={errors}
          errorsReducer={errorsReducer}
          setErrors={setErrors}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
      <div className={Styles.moveToEnd}>{isDisabled()}</div>
    </form>
  );
}

export default Details;
