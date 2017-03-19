import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import UserIcon from './UserIcon';

class ChatForm extends Component {
    render() {
        const { handleSubmit, me } = this.props;

        return(
            <form onSubmit={handleSubmit}>
                <div className="container chat-form">
                    <div className="row">
                        <div className="col-sm-2">
                            <span>{me.name}</span>
                        </div>
                        <div className="col-sm-8">
                            <Field name="message" component="input" type="text" className="form-control" required/>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-primary" type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </form>
        )  
    }
}

const chatReduxForm = reduxForm({
    form: 'chatform'
})(ChatForm);

export default  chatReduxForm;
