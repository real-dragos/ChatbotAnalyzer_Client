import { IMessage } from './../../../model/IMessage';

export interface IMessageProps {
    message: IMessage;
    isOwner: boolean;
    clicked?: () => void;
}