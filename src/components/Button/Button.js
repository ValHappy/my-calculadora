import React from 'react';
import './Button.css';

function Button(props) {

    function handleClick() {
        if (typeof props.onClick === 'function') {
            props.onClick(props.value);
        }
    }

    return <button className={`Button Button--${props.type}`}
        onClick={handleClick}>
        {props.value}
    </button>;
}



//Para decirle a App que vamos a usar el btn
export default Button;

