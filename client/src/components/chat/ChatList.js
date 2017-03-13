import React from 'react';
import ChatMessage from './ChatMessage';

const ChatList = props => {
    const { me, chats } = props;
    return(
        <ul>
            {chats.map(chat => {
                return <ChatMessage key={chat.id} chat={chat} me={me} />
            })}
        </ul>
    );
}

export default ChatList;