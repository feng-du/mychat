import React from 'react';

const NavForm = (props) => {
    return(
        <form className="form-inline mt-2 mt-md-0">
            {props.children}
        </form>
    );
}

export { NavForm };