import React, {useContext} from "react";
import Styles from "./Form.module.css";
import { UserContext } from "../../../Context/userContext";
import Details from './Questions/Details/Details';
import Preferences from './Questions/Preferences/Preferences';
import Confirm from './Questions/Confirm/Confirm'

const questionToShow = ({currentlyOnQuestion})=>{
    if(!currentlyOnQuestion && currentlyOnQuestion !== 0) return <div>Loading</div>
    const Questions = [<Details/>,<Preferences/>,<Confirm/>]
    return Questions[currentlyOnQuestion]
}

function Form() {
  const { user, setUser } = useContext(UserContext);
  const question = questionToShow(user)
  return (
    <div>
      <div className={Styles.addBreathingSpace}>
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
            Locker Buccaneer smartly keelhaul dance the hempen jig yo-ho-ho
            Plate Fleet list. Handsomely Pieces of Eight cable no prey, no pay
            lanyard Letter of Marque quarterdeck gangplank rum lookout. Aye log
            cutlass matey execution dock pressgang Shiver me timbers grog
            blossom jury mast pinnace. Cutlass hail-shot tender crimp Corsair me
            fore ye splice the main brace chandler. Nipperkin execution dock
            bowsprit smartly bring a spring upon her cable gally tack fore brig
            spirits.
          </p>
        </div>
      </div>
      <div className={Styles.questionContainer}>
        <div className={Styles.leftArrow}> back </div>
        {question}
        <div className={Styles.RightArrow}> next </div>
      </div>
    </div>
  );
}

export default Form;
