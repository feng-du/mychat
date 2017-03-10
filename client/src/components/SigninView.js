import React from 'react';
import SigninForm from './auth/SigninForm';

export default () => {
    return(
        <div className="container main-content">
            <h1>Please sign in</h1>
            <SigninForm />                
        </div>
    );
};