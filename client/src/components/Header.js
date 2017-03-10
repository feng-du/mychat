import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavForm } from './bootstrap';

class Header extends Component {
    renderLink() {
        if(this.props.authenticated)
            return <Link to='/signout' className="text-white my-2 my-sm-0">Sign out</Link>;
        else
            return [
                <Link to='/signin' className="text-white my-2 my-sm-0 mr-sm-2" key="1">Sign in</Link>,
                <span key="3">or</span>,
                <Link to='/signup' className="text-white my-2 my-sm-0 ml-sm-2" key="2">Sign up</Link>
            ];
    }

    render() {
        return(
            <Navbar brand="Chat">
                <Nav>
                    <NavItem>
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </NavItem>
                    <NavItem>
                        <a className="nav-link" href="#">Profile</a>
                    </NavItem>
                    <NavItem>
                        <a className="nav-link" href="#">Help</a>
                    </NavItem>
                </Nav>
                <span className="navbar-text">
                    {this.renderLink()}
                </span>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);
