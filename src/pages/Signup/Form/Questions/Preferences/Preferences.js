import React, { useState, useContext, useRef } from "react";
import Styles from "./Preferences.module.css";
import { UserContext } from "../../../../../Context/userContext";

function Preferences({ formProgress, setFormProgress }) {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});

  const [dogsAllowed, setDogsAllowed] = useState("");
  const [gifRate, setGifRate] = useState("");

  const dogOptions = [
    { id: "1", text: "Never" },
    { id: "2", text: "Some Times" },
    { id: "3", text: "Often" },
  ];

  const dogsAllowedField = useRef();
  const gifRateField = useRef();
  const isDisabled = () => {
    const errorAsArray = Object.keys(errors).length;

    if (dogsAllowed && gifRateField && !errorAsArray) {
      return (
        <button type="submit" className={`${Styles.mainActionButton} `}>
          Save and next
        </button>
      );
    }
    return (
      <button type="submit" disabled className={`${Styles.mainActionButton} `}>
        Save and next
      </button>
    );
  };
  const handleDogsAllowedChange = () => {};
  const handleGifRateChange = () => {};
  const handleFormSubmission = () => {};
  return (
    <form onSubmit={handleFormSubmission}>
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
                  <option key={option.id} value={option.text}>{option.text}</option>
                ))}
              </select>
              {errors.dogsAllowed && (
                <div className={Styles.inputError}>emails do not match</div>
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
                <div className={Styles.inputError}>{errors.email}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isDisabled()}
    </form>
  );
}

export default Preferences;
