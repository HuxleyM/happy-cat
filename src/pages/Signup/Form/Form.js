import React from "react";
import Styles from "./Form.module.css";

function Form() {
  return (
    <div>
      <div className={Styles.headerWrapper}>
        <h2 className={Styles.header}>SignUp</h2>
        <nav className={Styles.navBar}>
          <ul>
            <li>Details</li>
            <li>Preferences</li>
            <li>Confirm</li>
          </ul>
        </nav>
      </div>
      <div>
        <p>
          Man-of-war lateen sail spirits gunwalls gibbet tackle reef sails
          scuppers hands splice the main brace. Man-of-war plunder Davy Jones'
          Locker Buccaneer smartly keelhaul dance the hempen jig yo-ho-ho Plate
          Fleet list. Handsomely Pieces of Eight cable no prey, no pay lanyard
          Letter of Marque quarterdeck gangplank rum lookout. Aye log cutlass
          matey execution dock pressgang Shiver me timbers grog blossom jury
          mast pinnace. Cutlass hail-shot tender crimp Corsair me fore ye splice
          the main brace chandler. Nipperkin execution dock bowsprit smartly
          bring a spring upon her cable gally tack fore brig spirits.
        </p>
      </div>
    </div>
  );
}

export default Form;
