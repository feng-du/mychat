import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
    AUTH_USER
} from './types';

const ROOT_URL = 'http://localhost:3000';

export const signin = ({ email, password }) => {
    return dispatch => {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch({
                    type: AUTH_USER
                });

                browserHistory.push('/chart');
            })
            .catch(()=>{

            });
        
    };
}