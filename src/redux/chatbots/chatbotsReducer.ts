import { IChatbot } from './../../model/IChatbot';
import { AnyAction } from 'redux';
import { ChatbotActionTypes } from './chatbotsTypes';
import ConversionService from '../../services/ConversionService';

interface ChatbotsState {
    selectedChatbotId: number,
    chatbots: IChatbot[]
}

const initialState: ChatbotsState = {
    selectedChatbotId: -1,
    chatbots: []
}

const chatbotsReducer = (state: ChatbotsState = initialState, action: AnyAction): ChatbotsState => {
    switch(action.type){
        case ChatbotActionTypes.SET_CHATBOTS:
            const chatbots = action.payload.map(ConversionService.convertToIChatbot);
            return {
                ...state,
                chatbots
            }
        case ChatbotActionTypes.SELECT_CHATBOT:
            return {
                ...state,
                selectedChatbotId: action.payload
            }
        default:
            return state;
    }
}

export default chatbotsReducer;

