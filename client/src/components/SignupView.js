import React from 'react';
import SignupForm from './auth/SignupForm';

export default () => {
    return(
        <div className="container main-content">
            <h1>Please sign up</h1>
            <SignupForm />                
        </div>
    );
};