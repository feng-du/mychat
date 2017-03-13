import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Fields } from 'redux-form';

import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit({ email, password}) {
       this.props.signup({ email, password });
    }

    renderAlert() {
        const { errorMessage } = this.props;
        if(errorMessage)
            return (
                <div className="alert alert-danger" role="alert">
                    <strong>Oh snap!</strong> {errorMessage}.
                </div>
            );
    }

    render() {
        const { handleSubmit, labelVisible } = this.props;
        
        return(
             <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="email" component={renderField} type="email" label="Eamil Address" labelVisible={labelVisible} placeHolder={labelVisible?"Email Address":""}/>
                <Field name="password" component={renderField} type="password" label="Password" labelVisible={labelVisible} placeHolder={labelVisible?"Password":""}/>
                <Field name="confirmPassword" component={renderField} type="password" label="Confirm Password" labelVisible={labelVisible} placeHolder={labelVisible?"Confirm Password":""}/>

                <div>{this.renderAlert()}</div>
                <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign up</button>
            </form>
        );
    }
}

const renderField = ({ input, label, type, labelVisible, placeHolder, meta: { touched, error, warning } }) => {
    return(
        <div className={`form-group ${touched && error && "has-danger"}`}>
            {labelVisible || <label className="form-control-label">{label}</label>}
            <input {...input} type={type} placeholder={placeHolder} className="form-control" required/>    
            {touched && error && <div className="form-control-feedback">{error}</div>}
        </div>
    );
};

const validate = values => {
    const errors = {};
    if(values.password !== values.confirmPassword)
        errors.password = 'Passwords must match';

    return errors;
}

const SignupForm = reduxForm({
    form: 'signup',
    validate
})(Signup);

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(SignupForm);
