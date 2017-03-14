import React from 'react';

const UserIcon = (props) => {
    const { useName, size, user } = props;
    const name = useName ? user.name: null;

    return(
        <a className="thumbnail">
            <img src={user.image} className="rounded-circle" />
            <div><small className="text-center">{name}</small></div>
        </a>
    );
}

export default UserIcon;
