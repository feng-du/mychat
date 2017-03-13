import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

class RoomForm extends Component {
    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <Field name="room" component="input" type="text"  placeholder="Room name" className="form-control" required/>
                <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Join room</button>
            </form>
        );
    }
}

const roomReduxForm = reduxForm({
    form: 'room'
})(RoomForm);

export default connect()(roomReduxForm);
