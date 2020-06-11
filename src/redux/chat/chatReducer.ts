import { ChatActionTypes } from './chatTypes';
import { IMessage } from './../../model/IMessage';
import { AnyAction } from "redux"
import { IChatMetadata } from '../../model/IChatMetadata';
import ConversionService from '../../services/ConversionService';

interface ChatState {
    messages: IMessage[];
    sessionHistory: any[];
    metadata: IChatMetadata;
    patterns?: string[];
}

const initialState: ChatState = {
    messages: [],
    sessionHistory: [],
    metadata: { numberOfExchanges: 0 }
}

const chatReducer = (state: ChatState = initialState, action: AnyAction) => {
    switch (action.type) {
        case ChatActionTypes.ADD_MESSAGES:
            const messagesCopy = state.messages.concat(action.payload.map(ConversionService.convertToIMessage));
            return {
                ...state,
                messages: messagesCopy
            }
        case ChatActionTypes.SET_MESSAGES:
            const messages = action.payload.chats[0].messages.map(ConversionService.convertToIMessage)
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
                sessionHistory: []
            }
        case ChatActionTypes.ADD_HISTORY_ITEM:
            return {
                ...state,
                sessionHistory: [...state.sessionHistory, action.payload]
            }
        default:
            return state;
    }
}

export default chatReducer;