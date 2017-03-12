import React from 'react';
import { Jumbotron } from './bootstrap';
import SignupForm from './auth/SignupForm';

const SignupView = () => {
    return(
        <SignupForm labelVisible={true} />
    );
};

const IndexView = props => {
    return(
        <div>
            <Jumbotron title="Built for developers" item={SignupView()}>
                This is a development platform inspired by the way you work. Host code, manage projects, and build software alongside millions of other developers.
            </Jumbotron>
        </div>
    );
};


export default IndexView;