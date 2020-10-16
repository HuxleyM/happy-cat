import React, { useContext } from 'react';
import Styles from './Signup.module.css';
import Form from './Form/Form';
import Completed from './Completed/Completed';
import Loading from './Loading/Loading';
import { UserContext } from '../../Context/userContext';

const selectComponent = (user) => {
  if (!user) return <Loading />;
  if (user.completed) return <Completed />;
  if (!user.completed) return <Form />;
};

function Signup() {
  const { user } = useContext(UserContext);
  const ComponentToDisplay = selectComponent(user);

  return (
    <div className={Styles.signUpWrapper}>
      {ComponentToDisplay}
    </div>
  );
} 

export default Signup;
