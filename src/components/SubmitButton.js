import React, { useState } from 'react';
import '../App.css';

const SubmitButton = props => {
    return (
        <input className="submitButton" onClick={props.onClick} type='submit'
            value={props.value} />
    );
}

export default SubmitButton;