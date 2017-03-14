import React from 'react';
import moment from 'moment';
import UserIcon from './UserIcon';

const ChatMessage = props => {
    const { me, chat } = props;
    
    let pull = 'flex-first', justify = '';
    if(me.id === chat.user.id){
        justify = 'justify-content-end';
        pull = 'flex-last';
    }

    const timeAgo = moment(chat.ts).fromNow();
    return(
        <div className={`d-flex flex-nowrap ${justify}`}>
                <div className={`${pull} p-2`}>
                    <UserIcon user={chat.user} size={20} useName={true} />
                    <small>{timeAgo}</small>
                </div>
                <div>
                    {chat.message}
                    </div>
            </div>
    );
}

export default ChatMessage;
