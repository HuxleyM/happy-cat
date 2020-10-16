import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../../../Context/userContext";
import Styles from "./Confirm.module.css";

function Confirm() {
  const { user, setUser } = useContext(UserContext);
  const { userDetails, userPreference } = user;
  console.log('user', user)
  console.log(userDetails)
    useEffect(()=>{
        
    })

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
          <p>{user.userDetails.userName}</p>
        </div>
        <div>
          <p className={Styles.bold}>Email:</p>
          <p>{userDetails.email}</p>
        </div>
        <div>
          <p className={Styles.bold}>Password:</p>
          <p>{userDetails.password}</p>
        </div>
      </div>
      <div className={Styles.flexContainer}>
        <h4 className={Styles.space}> User Preferences </h4>
        <div>
          <p className={Styles.bold}>Include Dogs:</p>
          <p>{userPreference.allowDogs}</p>
        </div>
        <div>
          <p className={Styles.bold}>No. of GIFs per day:</p>
          <p>{userPreference.gifRate}</p>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
