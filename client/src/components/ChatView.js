import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card } from './bootstrap';
import UserList from './chat/UserList';
import ChatList from './chat/ChatList';
import ChatForm from './chat/ChatForm';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import ChatSocket from '../services/socket';

class ChatView extends Component {
    constructor(props) {
        super(props);

        this.socket = new ChatSocket(props.dispatch);
    }

    componentWillMount() {
        // console.log(this.props.params.room);
        const { room } = this.props.params;
        this.socket.getUsersInRoom(room);
        this.socket.getChatsInRoom(room);
    }

    handleSubmit(values) {

    }

    render() {
        const { users, chats, me } = this.props;

        return(
            <div className="container main-content">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card friends">
                            <div className="card-header">
                                Friends
                            </div>
                            <div className="card-block">
                                <div className="card-text">
                                    <UserList users={users} me={me} />
                                </div>
                                
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">View all friends</a>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-8">
                        <section>
                            <ChatList chats={chats} me={me} />
                        </section>
                        <section>
                            <ChatForm onSubmit={this.handleSubmit.bind(this)} me={me}/>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.chat.users,
        chats: state.chat.chats,
        me: state.chat.me
    };
}

export default connect(mapStateToProps, actions)(ChatView);