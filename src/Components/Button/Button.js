import React from 'react';
import Styles from'./Button.module.css';



function Button({text, state}) {
    return (
    <button disabled={state !== 'success'} className={`${Styles.mainActionButton} ${Styles[state]}`}>{text}</button>
    )
}

export default Button;
