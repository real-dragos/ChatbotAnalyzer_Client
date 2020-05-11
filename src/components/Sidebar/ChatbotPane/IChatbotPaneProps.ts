import { Status } from './../../../model/Status';
import { IChatbot } from './../../../model/IChatbot';
export interface IChatbotPaneProps {
    chatbots: IChatbot[];
    status: Status;
    currentChatbot: IChatbot;
    onSelectChatbot: (id: string) => void; 
}