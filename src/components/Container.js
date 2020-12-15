import React from 'react';
import '../App.css';

const Container = props => {
    return (
        <div className="mainContainer">{props.children}</div>
    );
}

export default Container;