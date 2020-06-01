import { AnyAction } from "redux";

import { ControlsActionTypes } from "./controlsTypes";

export const toggleGraph = (): AnyAction => ({
    type: ControlsActionTypes.TOGGLE_GRAPH
});

export const toggleNotifications = (): AnyAction => ({
    type: ControlsActionTypes.TOGGLE_NOTIFICATIONS
});