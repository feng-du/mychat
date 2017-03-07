import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <nav className="container">
                <div className="d-flex justify-content-between hidden-lg-up">
                <a className="navbar-brand" href="/">Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>

                <div className="collapse navbar-collapse" id="bd-main-nav">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-item nav-link " href="/">Bootstrap</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/signin' className="nav-item nav-link " >sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signup' className="nav-item nav-link " >sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
