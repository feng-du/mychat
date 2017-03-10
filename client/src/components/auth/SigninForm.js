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
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="form-group">
                    <label>Email address</label>
                    <Field name='email' component='input' type="email" className="form-control" required autoFocus />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Field  name='password' component='input' type="password" className="form-control" required />
                </div>
                
                <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
            </form>
        );
    }
}

const SigninForm = reduxForm({
    form: 'signin' 
})(Signin);

export default connect(null, actions)(SigninForm);
