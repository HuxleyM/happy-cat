import React, { useState, useContext, useRef } from "react";
import Styles from "./Preferences.module.css";
import { UserContext } from "../../../../../Context/userContext";

function Preferences({ handleFormSubmission }) {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});

  const [dogsAllowed, setDogsAllowed] = useState("");
  const [gifRate, setGifRate] = useState("");

  const dogOptions = [
    { id: "0", text: "Unselected" },
    { id: "1", text: "Never" },
    { id: "2", text: "Some Times" },
    { id: "3", text: "Often" },
  ];

  const dogsAllowedField = useRef();
  const gifRateField = useRef();

  const handleDogsAllowedChange = (e) => {
    const value = e.target.value;
    if (value !== "Unselected") {
      setDogsAllowed(e.target.value);
      ifExistingErrorsDelete({ key: "dogsAllowed" });
    } else {
      setErrors({ dogsAllowed: "Please select option." });
    }
  };
  const isDisabled = () => {
    const errorAsArray = Object.keys(errors).length;
    console.log(dogsAllowed, gifRate);
    if (dogsAllowed && gifRate && !errorAsArray) {
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

  const ifExistingErrorsDelete = ({ key }) => {
    if (errors[key]) {
      const newErrors = { ...errors };
      delete newErrors[key];
      setErrors({ ...newErrors });
    }
  };

  const handleGifRateChange = () => {
    if (gifRateField.current.value > 0 && gifRateField.current.value <= 10) {
      setGifRate(gifRateField.current.value);
      ifExistingErrorsDelete({ key: "gifRate" });
    } else {
      setErrors({ gifRate: "This is an invalid GIF rate" });
    }
  };
  const preferenceAnswers = () => {
    if (!dogsAllowed) {
      setErrors({ ...errors, dogsAllowed: "Select wether dogs are allowed" });
      return;
    }
    setUser({ ...user, gifRate, dogsAllowed });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); handleFormSubmission(preferenceAnswers);
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
