import React from 'react';

const SideBar = (props) => {
    return(
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            {props.children}
        </nav>
    );
};

export { SideBar };
