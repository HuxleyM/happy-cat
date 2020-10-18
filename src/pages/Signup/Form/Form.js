import React, { useContext, useState } from "react";
import Styles from "./Form.module.css";
import { UserContext } from "../../../Context/userContext";
import Details from "./Questions/Details/Details";
import Preferences from "./Questions/Preferences/Preferences";
import Confirm from "./Questions/Confirm/Confirm";



function Form() {
  const { user, setUser } = useContext(UserContext);
  const [formProgress, setFormProgress] = useState({
    questionsAnswered: 0,
    currentlyOnQuestion: 0,
  });



const movePage = (formProgress, setFormProgress, index) => {
    setTimeout(() => {
      let newPage = (formProgress.currentlyOnQuestion += index);
      setFormProgress({ ...formProgress, currentlyOnQuestion: newPage });
    }, 200);
  };


  const questionToShow = ({ currentlyOnQuestion }) => {
    if (!currentlyOnQuestion && currentlyOnQuestion !== 0)
      return <div>Loading</div>;
        const Questions = [
        <Details
            formProgress={formProgress}
            setFormProgress={setFormProgress}
        />,
        <Preferences
            formProgress={formProgress}
            setFormProgress={setFormProgress}
        />,
        <Confirm
            formProgress={formProgress}
            setFormProgress={setFormProgress}
        />,
        ];
        return Questions[currentlyOnQuestion];
    };
  const question = questionToShow(formProgress);
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
        {formProgress.questionsAnswered >= formProgress.currentlyOnQuestion &&
          formProgress.currentlyOnQuestion > 0 && (
            <div
              className={Styles.leftArrow}
              onClick={() => movePage(formProgress, setFormProgress, -1)}
            >
              {" "}
              back{" "}
            </div>
          )}
        {question}
        {formProgress.questionsAnswered > formProgress.currentlyOnQuestion &&
          formProgress.currentlyOnQuestion < 3 && (
            <div
              className={Styles.rightArrow}
              onClick={() => movePage(formProgress, setFormProgress, 1)}
            >
              {" "}
              next{" "}
            </div>
          )}
      </div>
    </div>
  );
}

export default Form;
