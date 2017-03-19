import _ from 'lodash';
import { Set } from 'immutable';

import {
    GET_ME,
    GET_USERS_IN_ROOM,
    GET_CHATS_IN_ROOM,
    GET_ROOMS,
    ADD_ROOM,
    ADD_CHAT
} from '../actions/types';

import img from '../../assets/user.png';

const INITIAL_STATE = {
    rooms: Set([]),
    users: [
        // { id:"111", name:"jack", image:img},
        // { id:"222", name:"yang", image:img},
        // { id:"333", name:"nick", image:img}
    ],
    chats:[
        // {
        //     id: "111" + (new Date).getTime().toString(),
        //     message: "message111", 
        //     room: "node", 
        //     ts: (new Date).getTime(), 
        //     user: { id:"111", name:"jack", image:img}
        // },
        // {
        //     id: "222" + (new Date).getTime().toString(),
        //     message: "message222", 
        //     room: "node", 
        //     ts: (new Date).getTime(), 
        //     user: { id:"222", name:"yang", image:img}
        // },
        // {
        //     id: "333" + (new Date).getTime().toString(),
        //     message: "message333", 
        //     room: "node", 
        //     ts: (new Date).getTime(), 
        //     user: { id:"333", name:"nick", image:img}
        // }
    ],
    me:{ id:"111", name:"jack", image:img}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ME:
            return { ...state, me : action.payload };
        case GET_USERS_IN_ROOM:
            return { ...state, users: action.payload };
        case GET_ROOMS:
            return { ...state, rooms: Set(action.payload) };
        case GET_CHATS_IN_ROOM:
            return { ...state, chats: action.payload };
        case ADD_ROOM: 
            return { ...state, rooms:state.rooms.add(action.payload)};
        case ADD_CHAT:
            return { ...state, chats: [ ...state.chats, action.payload]};
        default:
            return state;
    }
};