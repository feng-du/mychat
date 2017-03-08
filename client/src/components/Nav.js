import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Nav extends Component {
    renderLink() {
        if (this.props.authenticated) {
            return (
                <li className="nav-item">
                    <Link to='/signout' className="nav-item nav-link " >sign out</Link>
                </li>
            );
        }

        return [
            <li className="nav-item" key='1'>
                <Link to='/signin' className="nav-item nav-link " >sign in</Link>
            </li>,
            <li className="nav-item" key='2'>
                <Link to='/signup' className="nav-item nav-link " >sign up</Link>
            </li>
        ];
    }

    render() {
        return (
            <nav className="container">
                <div className="d-flex justify-content-between hidden-lg-up">
                <a className="navbar-brand" href="/">Chat</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>

                <div className="collapse navbar-collapse" id="bd-main-nav">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-item nav-link " href="/">Chat</a>
                        </li>
                        {this.renderLink()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Nav);
