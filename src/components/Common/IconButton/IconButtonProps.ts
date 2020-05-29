import { Status } from "../../../model/Status";

export interface IconButtonProps extends React.Props<any>{
    className?: string;
    title?: string;
    status?: Status;
    onClick?: () => void;
}