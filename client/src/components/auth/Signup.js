import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit({ email, password}) {
       this.props.signup({ email, password });
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div className="container">
                <h1>Please sign up</h1>
                <section>
                    <form className="form-signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <Field name='email' component='input' type="email" id="inputEmail" className="form-control mb-2" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <Field name='password' component='input' type="password" id="inputPassword" className="form-control mb-4" placeholder="Password" required />
                        <div>{this.props.error}</div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                    </form>
                </section>                
            </div>
        );
    }
}

const SignupForm = reduxForm({
    form: 'signup' 
})(Signup);

function mapStateToProps(state) {
    return { error: state.auth.error };
}

export default connect(mapStateToProps, actions)(SignupForm);
