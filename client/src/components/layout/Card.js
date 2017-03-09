import React from 'react';

const Card = (props) => {
    return(
        <ul className="nav nav-pills flex-column">
            {props.children}    
        </ul>
    );
};

export { Card };