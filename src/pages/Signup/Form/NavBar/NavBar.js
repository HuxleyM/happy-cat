import React from "react";
import Styles from "./NavBar.module.css";

function NavBar({ formProgress }) {
  const components = [
    { title: "Details", id: 0 },
    { title: "Preferences", id: 1 },
    { title: "Confirm", id: 2 },
  ];

  const { questionsAnswered, currentlyOnQuestion } = formProgress;

  const listItems = components.map((component) => {
    let className;
    if (currentlyOnQuestion === component.id) {
      className = `${Styles.currentlyOn}`;
    } else if (questionsAnswered > component.id) {
      className = `${Styles.completed}`;
    } else {
      className = `${Styles.incomplete}`;
    }

    return <li key={component.id} className={className}>{component.title}</li>;
  });
  return (
    <nav className={Styles.navBar}>
      <ul>{listItems}</ul>
    </nav>
  );
}

export default NavBar;
