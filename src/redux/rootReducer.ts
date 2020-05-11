import {combineReducers} from 'redux';
import chatReducer from './chat/chatReducer';
import chatbotsReducer from './chatbots/chatbotsReducer';
import apiReducer from './api/apiReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    chat: chatReducer,
    chatbot: chatbotsReducer,
    api: apiReducer,
    user: userReducer
});

export default rootReducer;