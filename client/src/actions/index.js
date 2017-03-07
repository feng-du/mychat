import axios from 'axios';
import { 
    USER_AUTH
} from './types';

const ROOT_URL = 'http://localhost:3000';

export const signin = async ({ email, password }) => {
    const result = await axios.post(`${ROOT_URL}/signin`, { email, password });

    // return dispatch => {
    //     axios.post(`${ROOT_URL}/signin`, { email, password })
    //         .then(response => {
    //             console.log(response);
    //         })
        
    // };
}