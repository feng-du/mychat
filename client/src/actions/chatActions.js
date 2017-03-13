import {
    ROOM_JOIN
} from './types';

export const joinRoom = room => {
    return dispatch => {
        console.log(room);

        dispatch({ type: ROOM_JOIN });
    }
}