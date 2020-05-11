import { AnyAction } from 'redux';
import { ApiActionTypes } from "./apiTypes";
import { HttpMethod } from '../../model/HttpMethod';

export const apiAction = ({
    url = "",
    method = HttpMethod.GET,
    data = {},
    onSuccess = (data: any) => {},
    onFailure = () => {},
    label = ""
}): AnyAction => ({
    type: ApiActionTypes.API,
    payload: {
        url,
        method,
        data,
        onSuccess,
        onFailure,
        label
    }
})

export const apiStart = (label: string): AnyAction => ({
    type: ApiActionTypes.API_START,
    payload: label
});

export const apiEnd = (label: string): AnyAction => ({
    type: ApiActionTypes.API_END,
    payload: label
});

export const apiError = (error: any): AnyAction => ({
    type: ApiActionTypes.API_ERROR,
    payload: error
})