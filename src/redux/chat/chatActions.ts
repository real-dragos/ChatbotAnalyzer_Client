import { AnyAction } from "redux";

import { messagesUrl, patternsUrl } from './../../constants';
import { ChatActionTypes } from './chatTypes';
import { IMessage } from './../../model/IMessage';
import { apiAction } from '../api/apiActions';
import { IChatMetadata } from '../../model/IChatMetadata';

export const fetchMessages = (userId: string, chatbotId: string): AnyAction => apiAction({
    url: messagesUrl,
    data: {
        userId,
        chatbotId
    },
    onSuccess: setMessages,
    onFailure: () => console.error("Error occured while loading chatbots"),
    label: ChatActionTypes.FETCH_MESSAGES
})

export const fetchPatterns = (tag: string): AnyAction => apiAction({
    url: patternsUrl,
    data: {
        tag
    },
    onSuccess: setPatterns,
    onFailure: () => console.error("Error occured while loading patterns"),
    label: ChatActionTypes.FETCH_PATTERNS
})

const setPatterns = (patterns: string[]): AnyAction => ({
    type: ChatActionTypes.SET_PATTERNS,
    payload: patterns
})

const setMessages = (messages: IMessage[]): AnyAction => ({
    type: ChatActionTypes.SET_MESSAGES,
    payload: messages
})

export const clearMessages = (): AnyAction => ({
    type: ChatActionTypes.CLEAR_MESSAGES
})

export const clearHistory = (): AnyAction => ({
    type: ChatActionTypes.CLEAR_HISTORY
})

export const addMessage = (message: IMessage): AnyAction => ({
    type: ChatActionTypes.ADD_NEW_MESSAGE,
    payload: message
});

export const addHistoryItem = (historyItem: IChatMetadata): AnyAction => ({
    type: ChatActionTypes.ADD_NEW_HISTORY_ITEM,
    payload: historyItem
})

export const setMetadata = (metadata: IChatMetadata): AnyAction => ({
    type: ChatActionTypes.SET_METADATA,
    payload: metadata
})