import React from 'react';
import '../App.css';

const Card = props => {
    return (
        <div className = "cardContainer">
            {props.children}
        </div>
    );
}

export default Card;