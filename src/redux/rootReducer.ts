import {combineReducers} from 'redux';
import chatReducer from './chat/chatReducer';
import chatbotsReducer from './chatbots/chatbotsReducer';
import apiReducer from './api/apiReducer';
import userReducer from './user/userReducer';
import controlsReducer from './controls/controlsReducer';

const rootReducer = combineReducers({
    chat: chatReducer,
    chatbot: chatbotsReducer,
    api: apiReducer,
    user: userReducer,
    controls: controlsReducer
});

export default rootReducer;