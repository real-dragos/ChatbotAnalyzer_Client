import { currentUserStorageName } from './../../constants';
import { IUser } from './../../model/IUser';
import { UserActionTypes } from './userTypes';
import { AnyAction } from 'redux';
import StorageService from '../../services/StorageService';

interface UserState {
    id: string,
    name: string,
    email: string
}

const initialState: UserState = {
    id: '',
    name: '',
    email: ''
}

const userReducer = (state: UserState = initialState, action: AnyAction): UserState => {
    switch(action.type){
        case UserActionTypes.SET_USER:
            const user: IUser = convertToIUser(action.payload);
            const userStr: any = StorageService.getItem(currentUserStorageName);
            if(!userStr){
                StorageService.setItem(currentUserStorageName, JSON.stringify(user));
            }
            return {
                ...state,
                ...user
            }
        default:
            return state;
    }
}

const convertToIUser = (data: any): IUser => ({
    id: data._id || data.id,
    name: data.name,
    email: data.email
})

export default userReducer;