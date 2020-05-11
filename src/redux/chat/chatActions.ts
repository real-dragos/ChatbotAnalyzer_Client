import { messagesUrl } from './../../constants';
import { ChatActionTypes } from './chatTypes';
import { AnyAction } from 'redux';
import { IMessage } from './../../model/IMessage';
import { apiAction } from '../api/apiActions';

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

const setMessages = (messages: IMessage[]): AnyAction => ({
    type: ChatActionTypes.SET_MESSAGES,
    payload: messages
})

export const addMessage = (message: IMessage): AnyAction => ({
    type: ChatActionTypes.ADD_NEW_MESSAGE,
    payload: message
});