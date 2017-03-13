import img from '../../assets/user.png';

const INITIAL_STATE = {
    rooms: ['node','vue'],
    users: [
        { id:"111", name:"jack", image:img},
        { id:"222", name:"yang", image:img}
    ],
    chats:[
        {
            id: "111" + (new Date).getTime().toString(),
            message: "message111", 
            room: "node", 
            ts: (new Date).getTime(), 
            user: { id:"111", name:"jack", image:img}
        },
        {
            id: "222" + (new Date).getTime().toString(),
            message: "message222", 
            room: "node", 
            ts: (new Date).getTime(), 
            user: { id:"222", name:"yang", image:img}
        }
    ],
    me:{ id:"111", name:"jack", image:img}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};