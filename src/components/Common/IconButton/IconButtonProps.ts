import { Status } from "../../../model/Status";

export interface IconButtonProps extends React.Props<any>{
    className?: string;
    status?: Status;
    onClick?: () => void;
}