import { AnyAction } from "redux";

import { ControlsActionTypes } from "./controlsTypes";
import { GraphFilter } from "../../model/GraphFilter";
import { INotification } from "../../model/INotification";

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

export const setNotification = (notification: INotification): AnyAction => ({
    type: ControlsActionTypes.SET_NOTIFICATION,
    payload: notification
});