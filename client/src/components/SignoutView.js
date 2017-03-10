import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions';

class SignoutView extends Component {
    componentWillMount() {
        this.props.signout();
    }

    render() {
        return (
            <div className="container main-content">
                Sorry to see you go...
            </div>
        );
    }
}

export default connect(null, { signout })(SignoutView);