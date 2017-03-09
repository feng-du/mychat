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
                <h1>Please sign in</h1>
                <section>
                    <form className="form-signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <Field name='email' component='input' type="email" id="inputEmail" className="form-control mb-2" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <Field name='password' component='input' type="password" id="inputPassword" className="form-control mb-4" placeholder="Password" required />
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </section>                
            </div>
        );
    }
}

const SigninForm = reduxForm({
    form: 'signin' 
})(Signin);

export default connect(null, actions)(SigninForm);
