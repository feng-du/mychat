import {
    GET_ME,
    GET_ROOMS,
    ROOM_JOIN
} from './types';

export const joinRoom = room => {
    return dispatch => {
        dispatch({ type: ROOM_JOIN });
    }
}

export const GetMe = user => {
    return {
        type: GET_ME,
        payload: user
    };
};

export const GetRooms = rooms => {
    return {
        type: GET_ROOMS,
        payload: rooms
    };
}