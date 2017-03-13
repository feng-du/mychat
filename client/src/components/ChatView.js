import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card } from './bootstrap';
import UserList from './chat/UserList';
import ChatList from './chat/ChatList';
import ChatForm from './chat/ChatForm';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

class ChatView extends Component {
    componentWillMount() {
        // console.log(this.props.params.room);
    }

    handleSubmit(values) {

    }

    render() {
        const { users, chats, me } = this.props;

        return(
            <div className="container-fluid">
                <div className="row">
                    <LeftPanel>
                        <Card>
                            <UserList users={users} me={me} />
                        </Card>
                    </LeftPanel>

                    <RightPanel title="">
                        <section>
                            <ChatList chats={chats} me={me} />
                        </section>
                        <section>
                            <ChatForm onSubmit={this.handleSubmit.bind(this)} me={me}/>
                        </section>
                    </RightPanel>
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