import { Status } from './../../../model/Status';
import { IMessage } from './../../../model/IMessage';

export interface IChatBodyProps {
    messages: IMessage[];
    userId: string;
    status: Status
    clicked?: () => void;
}