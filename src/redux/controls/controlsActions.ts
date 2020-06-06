import { AnyAction } from "redux";

import { ControlsActionTypes } from "./controlsTypes";
import { GraphFilter } from "../../model/GraphFilter";

export const toggleGraph = (): AnyAction => ({
    type: ControlsActionTypes.TOGGLE_GRAPH
});

export const toggleNotifications = (): AnyAction => ({
    type: ControlsActionTypes.TOGGLE_NOTIFICATIONS
});

export const changeGraphFilter = (filter: GraphFilter): AnyAction => ({
    type: ControlsActionTypes.CHANGE_GRAPH_FILTER,
    payload: filter
});