import React, { useState, useContext, useRef } from "react";
import Styles from "./Preferences.module.css";
import { UserContext } from "../../../../../Context/userContext";

function errorsReducer(state, { key, error, message = "" }) {
  if (error) {
    state[key] = message;
  } else {
    delete state[key];
  }
  return state;
}

function Preferences({ handleFormSubmission }) {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [answers, setAnswers] = useState("");

  const dogOptions = [
    { id: "0", text: "Unselected" },
    { id: "1", text: "Never" },
    { id: "2", text: "Some Times" },
    { id: "3", text: "Often" },
  ];

  const dogsAllowedField = useRef();
  const gifRateField = useRef();

  /// i d love to tidy this but do not know how to
  const isDisabled = () => {
    const errorAsArray = Object.keys(errors).length;
    const answersAsArray = Object.keys(answers).length;
    // disbaled needs false flag to disable and true to not
    const usable = errorAsArray === 0 && answersAsArray === 2 ? false : true;

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

  const handleGifRateChange = () => {
    const reducerProps =
      gifRateField.current.value < 0 || gifRateField.current.value >= 10
        ? {
            error: true,
            key: "gifRate",
            message: "This is an invalid GIF rate",
          }
        : { error: false, key: "gifRate" };
    errorsReducer(errors, reducerProps);
    setAnswers({ ...answers, gifRateField: gifRateField.current.value });
  };

  const handleDogsAllowedChange = (e) => {
    const value = e.target.value;
    const reducerProps =
      value === "Unselected"
        ? { error: true, key: "dogsAllowed", message: "Please select option." }
        : { error: false, key: "dogsAllowed" };
    errorsReducer(errors, reducerProps);

    setAnswers({ ...answers, dogsAllowed: e.target.value });
  };

  const preferenceAnswers = () => {
    if (!answers.dogsAllowed) {
      errorsReducer(errors, {
        error: true,
        key: "dogsAllowed",
        message: "Select wether dogs are allowed",
      });
      // if errors break out and dont submit
      return;
    }
    const { gifRate, dogsAllowed } = answers;
    setUser({ ...user, gifRate, dogsAllowed });
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
