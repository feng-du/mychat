import {
    AUTH_USER 
} from '../actions/types';

const INITIAL_STATE = {

};

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true };
        default:
            return state; 
    }
}; 