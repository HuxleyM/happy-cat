import React from 'react';
import Styles from './Button.module.css';

function Button({ text, disabled }) {

    console.log(disabled === false, disabled)
  return (
    <button type='submit' disabled={disabled} className={`${Styles.mainActionButton} `}>{text}</button>
  );
}

export default Button;
