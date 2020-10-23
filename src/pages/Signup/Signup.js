import React, { useContext } from "react";
import Styles from "./Signup.module.css";
import Form from "./Form/Form";
import Completed from "./Completed/Completed";
import Loading from "./Loading/Loading";
import { UserContext } from "../../Context/userContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Not best practice - use router or reducer or even a customer hook

const selectComponent = (user, componentToRender, route) => {
  if (!user) return <Loading />;
  if (user.completed) return <Completed />;
  if (!user.completed) return <Form />;
};

function Signup() {
  const { user } = useContext(UserContext);
  const ComponentToDisplay = selectComponent(user);

  return (
    <div className={Styles.signUpWrapper}>
      <Router>
        <Switch>
          <Route path="/completed">
            {user.completed ? <Completed /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Signup;
