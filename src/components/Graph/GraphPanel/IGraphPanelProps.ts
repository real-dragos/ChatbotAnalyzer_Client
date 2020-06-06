import { GraphFilter } from "../../../model/GraphFilter";

export interface IGraphPanelProps extends React.Props<any> {
    refresh: () => void;
    update: (item: any) => void;
    filter: GraphFilter;
}