import React, { useState } from "react";
import Styles from "./Details.module.css";
import Button from "../../../../../Components/Button/Button";

function Details() {
  const [errors, setErrors] = useState({});

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={Styles.flexContainer}>
        <div>
          <div className={Styles.questionWrapper}>
            <label htmlFor="userName">User name:</label>
            <div>
              <input type="text" id="userName" name="userName" required></input>
              {errors.username && <div>{errors.username.error}</div>}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="email">Email:</label>
            <div>
              <input type="email" id="email" name="email" required></input>
              {errors.email && <div>{errors.email.error}</div>}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="emailRetype">Retype email:</label>
            <div>
              <input
                type="email"
                id="emailRetype"
                name="emailRetype"
                required
              ></input>
              {errors.emailRetype && <div>{errors.emailRetype.error}</div>}
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
                required
              ></input>
              {errors.password && <div>{errors.password.error}</div>}
            </div>
          </div>

          <div className={Styles.questionWrapper}>
            <label htmlFor="passwordRetype">Retype password:</label>
            <div>
              <input
                type="password"
                id="passwordRetype"
                name="passwordRetype"
                required
              ></input>
              <div>
                {errors.passwordRetype && (
                  <div>{errors.passwordRetype.error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <input type="submit" value="Save and next"></input>
    </form>
  );
}

export default Details;
