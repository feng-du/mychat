import React from 'react';
import moment from 'moment';
import UserIcon from './UserIcon';

const ChatMessage = props => {
    const { me, chat } = props;
    
    let pull;
    if(me.id === chat.user.id)
        pull = 'pull-right';
    else
        pull = 'pull-left';

    const timeAgo = moment(chat.ts).fromNow();
    return(
        <li>
            <div className={`bg-primary chat-message ${pull}}`}>{chat.message}</div>
            <div className="clearfix"></div>
            <div className={pull}>
                <UserIcon user={chat.user} size={20} useName={true} />
                <small>{timeAgo}</small>
            </div>
            <div className="clearfix"></div>
        </li>    
    );
}

export default ChatMessage;