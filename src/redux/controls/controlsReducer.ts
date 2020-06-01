import { AnyAction } from "redux"
import { ControlsActionTypes } from './controlsTypes';

interface ControlsState {
    notifications: boolean;
    graph: boolean;
}

const initialState: ControlsState = {
    notifications: false,
    graph: false
}

const controlsReducer = (state: ControlsState = initialState, action: AnyAction) => {
    switch(action.type){     
        case ControlsActionTypes.TOGGLE_NOTIFICATIONS:
            return {
                ...state,
                notifications: !state.notifications
            }
        case ControlsActionTypes.TOGGLE_GRAPH:
            return {
                ...state,
                graph: !state.graph
            }
        default:
            return state;
    }
}

export default controlsReducer;