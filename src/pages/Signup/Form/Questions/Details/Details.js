import React from "react";
import Styles from "./Details.module.css";
import Button from '../../../../../Components/Button/Button'

function Details() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={Styles.leftSide}>
          <div className={Styles.questionWrapper}>
            <label for="userName">UserName:</label>
            <input type="text" id="userName" name="userName" required></input>
          </div>
          <div className={Styles.questionWrapper}>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div className={Styles.questionWrapper}>
            <label for="emailRetype">Retype email:</label>
            <input
              type="email"
              id="emailRetype"
              name="emailRetype"
              required
            ></input>
          </div>
        </div>
        <div className={Styles.rightSide}>
        <div className={Styles.questionWrapper}>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required></input>
          </div>
          <div className={Styles.questionWrapper}>
            <label for="passwordRetype">Retype password::</label>
            <input type="password" id="passwordRetype" name="passwordRetype" required></input>
          </div>
        </div>
        <Button text='save and next' value='incomplete'/>
      </form>
    </div>
  );
}

export default Details;
