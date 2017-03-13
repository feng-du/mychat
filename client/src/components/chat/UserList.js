import React from 'react';

import UserIcon from './UserIcon';

const UserList = (props) => {
    const { me, users } = props;

    return(
        <ul className="list-unstyled">
            {users.map(user => {
                if(me.id !== user.id)
                    return <li key={user.id}><UserIcon user={user} size={50} useName={true} /></li>
            })}
        </ul>
    );
}

export default UserList;