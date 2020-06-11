import { INotification } from "../../../model/INotification";

export interface IChatHeaderProps {
    name: string;
    mobileView: boolean;
    toggleView: () => void;
    activeNotifications?: boolean;
    toggleNotifications?: () => void;
    clearMessages?: () => void;
    setNotification: (notificaiton: INotification) => void;
}