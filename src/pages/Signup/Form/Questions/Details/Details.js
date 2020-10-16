import React, {useState} from "react";
import Styles from "./Details.module.css";
import Button from "../../../../../Components/Button/Button";

function Details() {
    const [errors, setErrors] = useState({}) 
    const isError = ({field}) => false;



  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={Styles.leftSide}>
          <div className={Styles.questionWrapper}>
            <label for="userName">UserName:</label>
            <input type="text" id="userName" name="userName" required></input>
            <div>{isError({field:"userName"}) && <p>error here</p>}</div>
          </div>

          <div className={Styles.questionWrapper}>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
            <div>{isError({field:"email"}) && <p>error here</p>}</div>
          </div>

          <div className={Styles.questionWrapper}>
            <label for="emailRetype">Retype email:</label>
            <input
              type="email"
              id="emailRetype"
              name="emailRetype"
              required
            ></input>
            <div>{isError({field:"emailRetype"}) && <p>error here</p>}</div>
          </div>
        </div>

        <div className={Styles.rightSide}>
          <div className={Styles.questionWrapper}>
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            ></input>
            <div>{isError({field:"password"}) && <p>error here</p>}</div>
          </div>

          <div className={Styles.questionWrapper}>
            <label for="passwordRetype">Retype password::</label>
            <input
              type="password"
              id="passwordRetype"
              name="passwordRetype"
              required
            ></input>
            <div>{isError({field:"passwordRetype"}) && <p>error here</p>}</div>
          </div>
        </div>

        <input type="submit" value="Save and next"></input>
      </form>
    </div>
  );
}

export default Details;
