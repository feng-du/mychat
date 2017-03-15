import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RoomForm from './chat/RoomForm';

import ChatSocket from '../services/socket';

class RoomView extends Component {
    constructor(props) {
        super(props);

        this.socket = new ChatSocket(props.dispatch);
    }

    componentWillMount() {
        this.socket.getRooms();
    }

    handleSubmit(values){
        this.socket.addRoom(values.room);
    }

    renderRoom(room) {
        return (
            <li key={room}>
               <Link to={`chat/${room}`} >{room}</Link>
            </li>
        );
    }

    render() {
        console.log(this.props.rooms);
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

export default connect(mapStateToProps)(RoomView);
