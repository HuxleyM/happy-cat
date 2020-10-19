import React, { useState, useContext, useRef } from "react";
import Styles from "./Preferences.module.css";
import { UserContext } from "../../../../../Context/userContext";

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

function Preferences({ handleFormSubmission }) {
  const { user, setUser } = useContext(UserContext);
  const [answers, setAnswers] = useState(false)
  const [errors, setErrors] = useState({});

  const dogOptions = [
    { id: "0", text: "Unselected" },
    { id: "1", text: "Never" },
    { id: "2", text: "Some Times" },
    { id: "3", text: "Often" },
  ];

  const dogsAllowedField = useRef();
  const gifRateField = useRef();

  const isDisabled = () => {
    const errorsAsArray = Object.keys(errors).length
    const answersAsArray = Object.keys(answers).length

    let usable = (answersAsArray === 2 && errorsAsArray === 0 ) ? true : false;
    console.log(answersAsArray, errorsAsArray)
    // disables must be provided false to be disabled
    return (
      <button
        type="submit"
        disabled={!usable}
        className={`${Styles.mainActionButton} `}
      >
        Save and next
      </button>
    );
  };

  const handleGifRateChange = () => {
    const reducerProps =
      gifRateField.current.value < 0 || gifRateField.current.value >= 10
        ? {
            error: true,
            key: "gifRate",
            message: "This is an invalid GIF rate",
          }
        : { error: false, key: "gifRate" };
    errorsReducer(errors, setErrors, reducerProps);
    if(!errors.gifRate){
        setAnswers({...answers, gifRate:gifRateField.current.value })
    }
   
  };

  const handleDogsAllowedChange = () => {
    const value = dogsAllowedField.current.value;
    const reducerProps =
      value === "Unselected"
        ? { error: true, key: "dogsAllowed", message: "Please select option." }
        : { error: false, key: "dogsAllowed" };
    errorsReducer(errors, setErrors, reducerProps);
    if(!errors.dogsAllowed){
        setAnswers({...answers, dogsAllowed:value})
    }

  };

  const preferenceAnswers = () => {
    handleDogsAllowedChange();
    setUser({
      ...user,
      gifRate: gifRateField.current.value,
      dogsAllowed: dogsAllowedField.current.value,
    });

  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleFormSubmission(preferenceAnswers);
      }}
    >
      <div className={Styles.flexContainer}>
        <div>
          <div className={Styles.questionWrapper}>
            <label htmlFor="dogsAllowed">Dogs allowed:</label>
            <div>
              <select
                id="dogsAllowed"
                name="dogsAllowed"
                ref={dogsAllowedField}
                onChange={handleDogsAllowedChange}
                value={user.dogsAllowed}
                required
              >
                {dogOptions.map((option) => (
                  <option key={option.id} value={option.text}>
                    {option.text}
                  </option>
                ))}
              </select>
              {errors.dogsAllowed && (
                <div className={Styles.inputError}>{errors.dogsAllowed}</div>
              )}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="gifRate">No. GIF's a day:</label>
            <div>
              <input
                min="1"
                max="10"
                type="number"
                id="gifRate"
                name="gifRate"
                required
                ref={gifRateField}
                value={user.gifRate}
                onChange={handleGifRateChange}
              ></input>
              {errors.gifRate && (
                <div className={Styles.inputError}>{errors.gifRate}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.moveToEnd}>{isDisabled()}</div>
    </form>
  );
}

export default Preferences;
