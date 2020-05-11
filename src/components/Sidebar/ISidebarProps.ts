import { IChatbot } from './../../model/IChatbot';
export interface ISidebarProps {
    chatbots: IChatbot[];
    chatbot: IChatbot;
    selectChatbot: (id: string) => void; 
}