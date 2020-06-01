import { IChatbot } from './../../model/IChatbot';
import { IMessage } from '../../model/IMessage';

export interface IChatProps {
    currentChatbot: IChatbot;
    currentUserId?: string;
    toggleNotifications?: () => void;
    activeNotifications?: boolean;
}