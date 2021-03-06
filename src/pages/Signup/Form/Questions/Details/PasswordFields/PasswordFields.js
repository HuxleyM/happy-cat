import React, { useState, useRef, useContext} from "react";
import Styles from "./PasswordFields.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as utils from "../utils";
import { UserContext } from '../../../../../../Context/userContext';


/***
 * 
 * I recognise this shouldn't have so many arguments
 * if using vue i would have mapped this to state involving a user object and validated and against this object 
 * no need to pass answers or errors around like this :(
 * 
 * password is broken out from the form to reduce file size of the other one as well to allow it 
 * room to add a password strength meter
 */

function PasswordFields({ setErrors, errors, setAnswers, answers, errorsReducer }) {
  const { user } = useContext(UserContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const passwordField = useRef();
  const passwordRetypeField = useRef();

  const handlePasswordChange = () => {
    const reducerProps = !utils.validPassword(passwordField.current.value)
      ? {
          error: true,
          key: "password",
          message: "This is not a valid password.",
        }
      : { error: false, key: "password" };
    errorsReducer(errors, setErrors, reducerProps);
    if (!errors.password) {
      setAnswers({ ...answers, password: passwordField.current.value });
    }
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
    errorsReducer(errors, setErrors, reducerProps);
    if (!errors.passwordRetypeField) {
      setAnswers({
        ...answers,
        passwordRetype: passwordRetypeField.current.value,
      });
    }
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
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
            Password must contain at least 8 digits, a special character and a
            number.
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
              <div className={Styles.inputError}>{errors.passwordRetype}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PasswordFields;
