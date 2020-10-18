import React from "react";
import Styles from "./Completed.module.css";

function Confirmation() {
  return (
    <div>
      <div className={Styles.addBreathingSpace}>
        <div className={Styles.headerWrapper}>
          <h2 className={Styles.header}>Confirmation</h2>
        </div>
        <div>
          <p>
            Purrrfect! you have already completed this form and are part
            of HappyCat email service.
          </p>
        </div>
      </div>
      <div className={Styles.flexContainer}>
          <div className={`${Styles.image} ${Styles.cat1}`}></div> 
      </div>
    </div>
  );
}

export default Confirmation;
