import { UserActionTypes } from './userTypes';
import { apiAction } from '../api/apiActions';
import { usersUrl } from '../../constants';

export const fetchUserData = (name: string) => apiAction({
    url: usersUrl,
    data: {name: name},
    onSuccess: setUserData,
    onFailure: () => console.error("Error occured while fetching a user"),
    label: UserActionTypes.FETCH_USER
})

export const setUserData = (data: any) => ({
    type: UserActionTypes.SET_USER,
    payload: data
})