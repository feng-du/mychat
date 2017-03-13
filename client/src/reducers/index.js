import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    chat: chatReducer
});

export default rootReducer;
