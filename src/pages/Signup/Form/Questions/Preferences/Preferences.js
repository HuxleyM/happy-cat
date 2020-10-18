import React,{useState,useContext, useRef} from "react";
import Styles from './Preferences.module.css'
import { UserContext } from "../../../../../Context/userContext";


function Preferences({formProgress,setFormProgress}) {
    const { user, setUser } = useContext(UserContext);
    const [errors, setErrors] = useState({});

    const [dogsAllowed, setDogsAllowed] = useState("");
  const [gifRate, setGifRate] = useState("");

  const dogsAllowedField = useRef()
  const gifRateField = useRef()
  const isDisabled = () => {}
  const handleDogsAllowedChange = ()=>{}
  const handleGifRateChange = () => {}
  const handleFormSubmission = () => {}
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
                ref={dogsAllowedField}
                onChange={handleDogsAllowedChange}
                value={user.dogsAllowed}
                required
              ></input>
              {errors.dogsAllowed && (
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
