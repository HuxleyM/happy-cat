import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/userContext";
import Styles from "./Confirm.module.css";

function Confirm() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <div className={Styles.header}>
        <h3>Confirm</h3>
        <p> Please confirm your details before we finalize your signup.</p>
      </div>
      <div className={Styles.flexContainer}>
        <h4 className={Styles.space}> UserDetails </h4>
        <div>
          <p className={Styles.bold}>User name:</p>
          <p>kipo</p>
        </div>
        <div>
          <p className={Styles.bold}>Email:</p>
          <p>georg@gmail.com</p>
        </div>
        <div>
          <p className={Styles.bold}>Password:</p>
          <p>secret</p>
        </div>
      </div>
      <div className={Styles.flexContainer}>
        <h4  className={Styles.space}> User Preferences </h4>
        <div>
          <p className={Styles.bold}>Include Dogs:</p>
          <p>sometimes</p>
        </div>
        <div>
          <p className={Styles.bold}>No. of GIFs per day:</p>
          <p>10</p>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
