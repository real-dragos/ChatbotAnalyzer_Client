import { Status } from "../../../model/Status";

export interface IMessageBarProps {
    submitMessage: (event: any)=> void;
    status: Status;
}