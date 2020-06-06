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
                sessionHistory: [{
                    input: { text: 'Test 1. I am Dragos, the master of the sword and pencil' },
                    output: { text: 'Test 1 Reply. Who are you? Are you a spirit or a body?' },
                    confidence: 0.95,
                    exchange: 1
                },
                {
                    input: { text: 'Test 2' },
                    output: { text: 'Test 2 Reply' },
                    confidence: 0.7,
                    exchange: 2
                },
                {
                    input: { text: 'Test 3' },
                    output: { text: 'Test 3 Reply' },
                    confidence: 0.87,
                    exchange: 3
                },
                {
                    input: { text: 'Test 4' },
                    output: { text: 'Test 4 Reply' },
                    confidence: 0.5,
                    exchange: 4
                },
                {
                    input: { text: 'Test 5' },
                    output: { text: 'Test 5 Reply' },
                    confidence: 0.9,
                    exchange: 5
                },
                {
                    input: { text: 'Test 6' },
                    output: { text: 'Test 6 Reply' },
                    confidence: 0.97,
                    exchange: 6
                },
                {
                    input: { text: 'Test 7' },
                    output: { text: 'Test 7 Reply' },
                    confidence: 0.9,
                    exchange: 7
                },
                {
                    input: { text: 'Test 8' },
                    output: { text: 'Test 8 Reply' },
                    confidence: 0.35,
                    exchange: 8
                },
                {
                    input: { text: 'Test 9' },
                    output: { text: 'Test 9 Reply' },
                    confidence: 0.2,
                    exchange: 9
                },
                {
                    input: { text: 'Test 10' },
                    output: { text: 'Test 10 Reply' },
                    confidence: 0.85,
                    exchange: 10
                },
                {
                    input: { text: 'Test 11' },
                    output: { text: 'Test 11 ReplyI want to be stronger' },
                    confidence: 0.55,
                    exchange: 11
                }
                ]
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