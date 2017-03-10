import React from 'react';

const NavItem = (props) => {
    return(
        <li className="nav-item active">
           {props.children}
        </li>
    );
};

export { NavItem };