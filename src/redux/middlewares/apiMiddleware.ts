import { AnyAction } from 'redux';
import axios from "axios";
import {ApiActionTypes} from '../api/apiTypes';
import {apiStart, apiEnd, apiError} from '../api/apiActions';
import { HttpMethod } from '../../model/HttpMethod';

export const apiMiddleware = ({dispatch}: any) => (next: any) => (action: AnyAction) => {

    next(action);

    if(action.type !== ApiActionTypes.API) return;

    const {
        url, 
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headers
    } = action.payload;

    const dataOrParams = [HttpMethod.GET, HttpMethod.DELETE].includes(method) ? "params" : "data";

    axios.defaults.baseURL = process.env.BaseUrl || "";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] = `Bearer${accessToken}`;

    if(label) {
        dispatch(apiStart(label));
    }

    axios.request({
        url,
        method,
        headers,
        [dataOrParams]: data
    })
    .then(({data}) =>{
        dispatch(onSuccess(data));
        if(label){
            dispatch(apiEnd(label));
        }
    })
    .catch(error => {
        dispatch(apiError(error));
        try{
            dispatch(onFailure(error));
        }
        catch(ex){
            console.error(ex);
        }
    })
}