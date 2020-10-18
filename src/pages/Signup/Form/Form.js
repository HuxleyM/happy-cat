import React, { useContext, useState } from "react";
import Styles from "./Form.module.css";
import { UserContext } from "../../../Context/userContext";
import Details from "./Questions/Details/Details";
import Preferences from "./Questions/Preferences/Preferences";
import Confirm from "./Questions/Confirm/Confirm";
import NavBar from "./NavBar/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

function Form() {
  const { user, setUser } = useContext(UserContext);
  const [formProgress, setFormProgress] = useState({
    questionsAnswered: 1,
    currentlyOnQuestion: 1,
  });

  const movePage = (formProgress, setFormProgress, index) => {
    setTimeout(() => {
      let newPage = (formProgress.currentlyOnQuestion += index);
      setFormProgress({ ...formProgress, currentlyOnQuestion: newPage });
    }, 200);
  };

  /**
   *
   * @param {cb}
   * This takes a cb function unique to the question page
   * means do not have to pass form data to each comp
   */
  const handleFormSubmission = (cb) => {
    cb();
    let newQuestionedAnswered = (formProgress.questionsAnswered += 1);
    let newCurrentlyOn = (formProgress.currentlyOnQuestion += 1);
    setFormProgress({
      ...formProgress,
      questionsAnswered: newQuestionedAnswered,
      currentlyOnQuestion: newCurrentlyOn,
    });
  };

  const questionToShow = ({ currentlyOnQuestion }) => {
    if (!currentlyOnQuestion && currentlyOnQuestion !== 0)
      return <div>Loading</div>;
    const Questions = [
      <Details handleFormSubmission={handleFormSubmission} />,
      <Preferences handleFormSubmission={handleFormSubmission} />,
      <Confirm formProgress={formProgress} setFormProgress={setFormProgress} />,
    ];
    return Questions[currentlyOnQuestion];
  };
  const question = questionToShow(formProgress);
  return (
    <div>
      <div className={Styles.addBreathingSpace}>
        <div className={Styles.headerWrapper}>
          <h2 className={Styles.header}>SignUp</h2>
          <NavBar formProgress={formProgress}/>
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
              className={Styles.arrow}
              onClick={() => movePage(formProgress, setFormProgress, -1)}
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                style={{ color: "#c4c4c4" }}
              />
            </div>
          )}
        {question}
        {formProgress.questionsAnswered > formProgress.currentlyOnQuestion &&
          formProgress.currentlyOnQuestion < 3 && (
            <div
              className={Styles.arrow}
              onClick={() => movePage(formProgress, setFormProgress, 1)}
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                style={{ color: "#c4c4c4" }}
              />
            </div>
          )}
      </div>
    </div>
  );
}

export default Form;
