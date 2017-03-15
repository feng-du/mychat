import {
    GET_ME,
    GET_USERS_IN_ROOM,
    GET_ROOMS,
    GET_CHATS_IN_ROOM,
    ADD_ROOM
} from './types';

export const GetMe = user => {
    return {
        type: GET_ME,
        payload: user
    };
};

export const GetUsersInRoom = rooms => {
    return {
        type: GET_USERS_IN_ROOM,
        payload: rooms
    };
};

export const GetRooms = rooms => {
    return {
        type: GET_ROOMS,
        payload: rooms
    };
};

export const GetChatsInRoom = chats => {
    return {
        type: GET_CHATS_IN_ROOM,
        payload: chats
    };
}

export const AddRoom = room => {
    return {
        type: ADD_ROOM,
        payload: room
    };
}