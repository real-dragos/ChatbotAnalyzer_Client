import { AnyAction } from "redux"
import { ControlsActionTypes } from './controlsTypes';
import { GraphFilter } from "../../model/GraphFilter";

interface ControlsState {
    notifications: boolean;
    graph: boolean;
    graphFilter: GraphFilter 
}

const initialState: ControlsState = {
    notifications: false,
    graph: false,
    graphFilter: GraphFilter.All
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
                graph: !state.graph,
                graphFilter: GraphFilter.All
            }
        case ControlsActionTypes.CHANGE_GRAPH_FILTER:
            return {
                ...state,
                graphFilter: action.payload
            }
        default:
            return state;
    }
}

export default controlsReducer;