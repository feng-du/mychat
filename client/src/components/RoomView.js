import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RoomForm from './chat/RoomForm';

import { joinRoom } from '../actions';

class RoomView extends Component {
    handleSubmit(values){
        this.props.joinRoom(values.room);
    }

    renderRoom(room) {
        return (
            <li key={room}>
               <Link to={`chart/${room}`} >{room}</Link>
            </li>
        );
    }

    render() {
        return(
            <div className="container main-content">
                <h1>Please select a room</h1>
                <RoomForm onSubmit={this.handleSubmit.bind(this)}/> 
                <ul className="list-unstyled">
                    {this.props.rooms.map(this.renderRoom)}
                </ul>               
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.chat.rooms
    };
}

export default connect(mapStateToProps, { joinRoom })(RoomView);
