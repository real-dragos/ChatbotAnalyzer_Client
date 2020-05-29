import { IChatbot } from './../../../model/IChatbot';
import { IChatMetadata } from '../../../model/IChatMetadata';

export interface IChatbotInfoPaneProps {
    currentChatbot: IChatbot;
    chatMetadata: IChatMetadata;
}