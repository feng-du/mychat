import React from 'react';
import ChatMessage from './ChatMessage';

const ChatList = props => {
    const { me, chats } = props;
    return(
        <div className="container chat-list">
            {chats.map(chat => {
                return <ChatMessage key={chat.id} chat={chat} me={me} />
            })}
        </div>
    );
}

export default ChatList;