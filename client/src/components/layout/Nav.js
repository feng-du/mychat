import React from 'react';

const Nav = (props) => {
    return(
        <ul className="navbar-nav mr-auto">
            {props.children}
        </ul>
    );
};

export { Nav };