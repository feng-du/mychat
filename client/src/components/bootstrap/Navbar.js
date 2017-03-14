import React from 'react';

const Navbar = (props) => {
    const { brand, children } = props;

    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">{brand}</a>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                {children}                
            </div>
        </nav>
    );
};

export { Navbar };