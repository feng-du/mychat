import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
    render() {
        return(
            <header className="navbar navbar-light navbar-toggleable-md bd-navbar">
               <Nav />
            </header>
        );
    }
}

export default Header;
