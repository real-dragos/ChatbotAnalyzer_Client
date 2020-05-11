import { Status } from './../../../model/Status';
import { IMessage } from './../../../model/IMessage';

export interface IChatBodyProps {
    messages: IMessage[];
    chatbotId: string;
    status: Status
    clicked?: () => void;
}