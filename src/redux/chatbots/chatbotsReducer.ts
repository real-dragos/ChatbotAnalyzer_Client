import { IChatbot } from './../../model/IChatbot';
import { AnyAction } from 'redux';
import { ChatbotActionTypes } from './chatbotsTypes';

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
            const chatbots = action.payload.map(convertToIChatbot);
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

const convertToIChatbot = (data: any): IChatbot => ({
    id: data._id,
    name: data.name,
    imageUrl: data.imageUrl,
    description: data.description,
    metadata: {
        intentsSize: data.intentsSize,
        vocabularySize: data.vocabularySize
    }
})

export default chatbotsReducer;

