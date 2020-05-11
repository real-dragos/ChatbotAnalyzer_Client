import { UserActionTypes } from './../user/userTypes';
import { ChatbotActionTypes } from './../chatbots/chatbotsTypes';
import { ApiActionTypes } from './apiTypes';
import { AnyAction } from "redux"
import { Status } from '../../model/Status';
import { ChatActionTypes } from '../chat/chatTypes';

interface ApiState {
    status: Status;
}

const initialState: ApiState = {
    status: Status.Pending
}

const apiReducer = (state: ApiState = initialState, action: AnyAction) => {
    switch(action.type){
        case ApiActionTypes.API_START:
            switch(action.payload){
            case ChatbotActionTypes.FETCH_CHATBOTS:
                return {
                    ...state,
                    status: Status.Pending
                }
            case UserActionTypes.FETCH_USER:
                return {
                    ...state,
                }
            case ChatActionTypes.FETCH_MESSAGES:
                return {
                    ...state,
                    status: Status.Pending
                }
            }
            break;
        case ApiActionTypes.API_END:
            switch(action.payload){
                default:
                    return {
                        ...state,
                        status: Status.Active
                    }
            }
        case ApiActionTypes.API_ERROR:
            switch(action.payload){
                default:
                    return {
                        ...state,
                        status: Status.Error
                    }
            }
        default:
            return state;
    }
}

export default apiReducer;