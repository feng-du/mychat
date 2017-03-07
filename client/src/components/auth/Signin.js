import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions';

class Signin extends Component {
    handleFormSubmit({ email, password}) {
        this.props.signin({ email, password });
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div className="container">
                <form className="form-signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <Field name='email' component='input' type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <Field name='password' component='input' type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox">
                    <label>
                        {/*<input type="checkbox" value="remember-me" /> Remember me*/}
                    </label>
                    </div>
                    <button
                        className="btn btn-lg btn-primary btn-block" 
                        type="submit"
                        >Sign in</button>
                </form>
            </div>
        );
    }
}

const SigninForm = reduxForm({
    form: 'signin' 
})(Signin);

export default connect(null, actions)(SigninForm);
