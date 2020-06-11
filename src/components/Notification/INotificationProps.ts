import { INotification } from "../../model/INotification";

export interface INotificationProps {
    notification: INotification,
    activeNotifications: boolean,
    setNotification: (notification: INotification) => void
}