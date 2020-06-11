import { IChatbot } from './../../model/IChatbot';
import { INotification } from '../../model/INotification';

export interface IChatProps {
    currentChatbot: IChatbot;
    currentUserId?: string;
    context?: string;
    toggleNotifications?: () => void;
    activeNotifications?: boolean;
    setNotification: (Notification: INotification) => void;
}