import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3000';

export const signin = ({ email, password }) => {
    return dispatch => {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                authSuccess(dispatch, response.data.token);
            })
            .catch(({ response }) => {
                dispatch(authError('Bad login'));
            });
        
    };
};

export const signup = ({ email, password }) => {
    return dispatch => {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                authSuccess(dispatch, response.data.token);
            })
            .catch(({ response }) => {
                dispatch(authError(response.data.error));
            });
    };
};

export const signout = () => {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
};

export const authSuccess = (dispatch, token) => {
    dispatch({ type: AUTH_USER });
    localStorage.setItem('token', token);
    browserHistory.push('/chart');
};

export const authError = error => {
    return { type: AUTH_ERROR, payload: error };
};