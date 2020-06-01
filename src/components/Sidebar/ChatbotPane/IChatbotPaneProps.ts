import { Status } from './../../../model/Status';
import { IChatbot } from './../../../model/IChatbot';
import { IMessage } from '../../../model/IMessage';

export interface IChatbotPaneProps {
    chatbots: IChatbot[];
    status: Status;
    currentChatbot: IChatbot;
    onSelectChatbot: (id: string) => void;
    toggleGraph: () => void; 
    refresh?: ()=>void;
    messages?: IMessage[]
}