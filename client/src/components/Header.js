import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavForm } from './bootstrap';

import logo from '../../assets/logo.png';

class Header extends Component {
    renderLink() {
        if(this.props.authenticated)
            return <Link to='/signout' className="text-white my-2 my-sm-0">Sign out</Link>;
        else
            return (
                <div>
                    <Link to='/signin' className="text-white  mr-2" key="1">Sign in</Link>
                    <span key="3">or</span>
                    <Link to='/signup' className="text-white  ml-2" key="2">Sign up</Link>
                </div>
            );
    }

    render() {
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <img src={logo} className="logo"/>
                        </div>
                        <div className="col-md-4 align-self-end">
                            {this.renderLink()}
                        </div>
                    
                    </div>
                </div>
            </header>
            
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);
