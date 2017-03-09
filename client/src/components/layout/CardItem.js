import React from 'react';

const CardItem = (props) => {
    return(
        <li className="nav-item">
            {props.children}      
        </li>
    );
};

export { CardItem };