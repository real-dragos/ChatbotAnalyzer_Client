import { ChatActionTypes } from './chatTypes';
import { IMessage } from './../../model/IMessage';
import { AnyAction } from "redux"
import { IChatMetadata } from '../../model/IChatMetadata';

interface ChatState {
    messages: IMessage[];
    chatHistory: IChatMetadata[];
    metadata: IChatMetadata;
    patterns?: string[];
}

const initialState: ChatState = {
    messages: [],
    chatHistory: [],
    metadata: {numberOfExchanges: 0 }
}

const chatReducer = (state: ChatState = initialState, action: AnyAction) => {
    switch (action.type) {
        case ChatActionTypes.ADD_NEW_MESSAGE:
            const messagesCopy = [...state.messages];
            messagesCopy.push(convertToIMessage(action.payload));
            return {
                ...state,
                messages: messagesCopy
            }
        case ChatActionTypes.SET_MESSAGES:
            const messages = action.payload.chats[0].messages.map(convertToIMessage)
            return {
                ...state,
                messages
            }
        case ChatActionTypes.SET_METADATA:
            return {
                ...state,
                metadata: {
                    ...state.metadata,
                    ...action.payload
                }
            }
        case ChatActionTypes.SET_PATTERNS:
            return {
                ...state,
                patterns: action.payload
            }
        case ChatActionTypes.CLEAR_MESSAGES:
            return {
                ...state,
                messages: []
            }
        case ChatActionTypes.CLEAR_HISTORY:
            return {
                ...state,
                chatHistory: []
            }
        case ChatActionTypes.ADD_NEW_HISTORY_ITEM:
            return {
                ...state,
                chatHistory: [...state.chatHistory, action.payload]
            }
        default:
            return state;
    }
}

const convertToIMessage = (data: any): IMessage => ({
    id: data._id || data.id,
    text: data.text,
    ownerId: data.ownerId,
    timestamp: new Date(data.timestamp)
})

export default chatReducer;