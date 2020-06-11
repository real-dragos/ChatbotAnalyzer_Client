import { AnyAction } from "redux"
import { ControlsActionTypes } from './controlsTypes';
import { GraphFilter } from "../../model/GraphFilter";
import { INotification } from "../../model/INotification";

interface ControlsState {
    activeNotifications: boolean;
    notification?: INotification;
    graph: boolean;
    graphFilter: GraphFilter 
}

const initialState: ControlsState = {
    activeNotifications: false,
    graph: false,
    graphFilter: GraphFilter.All
}

const controlsReducer = (state: ControlsState = initialState, action: AnyAction) => {
    switch(action.type){     
        case ControlsActionTypes.TOGGLE_NOTIFICATIONS:
            return {
                ...state,
                activeNotifications: !state.activeNotifications
            }
        case ControlsActionTypes.TOGGLE_GRAPH:
            return {
                ...state,
                graph: !state.graph,
                graphFilter: GraphFilter.All
            }
        case ControlsActionTypes.CHANGE_GRAPH_FILTER:
            return {
                ...state,
                graphFilter: action.payload
            }
        case ControlsActionTypes.SET_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            }
        default:
            return state;
    }
}

export default controlsReducer;