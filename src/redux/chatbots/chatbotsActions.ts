import { apiAction } from './../api/apiActions';
import { ChatbotActionTypes } from './chatbotsTypes';
import { chatbotsUrl } from './../../constants';
import { fetchMessages } from '../chat/chatActions';

export const fetchChatbotsData = () => apiAction({
    url: chatbotsUrl,
    onSuccess: setChatbotsData,
    onFailure: () => console.error("Error occured while loading chatbots"),
    label: ChatbotActionTypes.FETCH_CHATBOTS
})

const setChatbotsData = (data: any) => {
    return (dispatch: any) => [
            dispatch({
                type: ChatbotActionTypes.SET_CHATBOTS,
                payload: data
            }),
            dispatch(selectChatbot(data[0]._id))
        ]
}

export const selectChatbot = (id: string) => {
    return (dispatch: any, getState: any) => {
        dispatch({
            type: ChatbotActionTypes.SELECT_CHATBOT,
            payload: id
        });
        dispatch(fetchMessages(getState().user.id, id));
    }
}