import React from 'react';

const UserIcon = (props) => {
    const { useName, size, user } = props;
    const name = useName ? user.name: null;
console.log(user.image)
    return(
        
        <div>
            <img src={user.image} className="img-thumbnail" />
            {name}
        </div>
    );
}

export default UserIcon;
