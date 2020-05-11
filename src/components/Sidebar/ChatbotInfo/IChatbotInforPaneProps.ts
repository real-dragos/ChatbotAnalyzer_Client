import { IChatbot } from './../../../model/IChatbot';
export interface IChatbotInfoPaneProps {
    currentChatbot: IChatbot;
    responseTime?: number;
    currentContext?: string;
    confidenceLevel?: number;
}