import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../../../Context/userContext";
import Styles from "./Confirm.module.css";

function Confirm() {
  const { user, setUser } = useContext(UserContext);
  const submitForm = () => {
      setUser({...user, completed:true})
  }
  return (
    <div>
      <div className={Styles.header}>
        <h3>Confirm</h3>
        <p>
          Please confirm your details before we finalize your signup. Use the
          navigation button to go backwards if things look wrong.
        </p>
      </div>
      <div className={Styles.flexContainer}>
        <h4 className={Styles.space}> UserDetails </h4>
        <div>
          <p className={Styles.bold}>User name:</p>
          <p>{user.userName}</p>
        </div>
        <div>
          <p className={Styles.bold}>Email:</p>
          <p>{user.email}</p>
        </div>
        <div>
          <p className={Styles.bold}>Password:</p>
          <p>{user.password}</p>
        </div>
      </div>
      <div className={Styles.flexContainer}>
        <h4 className={Styles.space}> User Preferences </h4>
        <div>
          <p className={Styles.bold}>Include Dogs:</p>
          <p>{user.dogsAllowed}</p>
        </div>
        <div>
          <p className={Styles.bold}>No. of GIFs per day:</p>
          <p>{user.gifRate}</p>
        </div>
      </div>
      <button
        type="submit"
        className={`${Styles.mainActionButton}`}
        onClick={submitForm}
      >
        Save and next
      </button>
    </div>
  );
}

export default Confirm;
