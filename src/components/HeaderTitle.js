import React from 'react';
import '../App.css';

const HeaderTitle = props => {
    return <h1 className="headerText">{props.children}</h1>;
}

export default HeaderTitle;