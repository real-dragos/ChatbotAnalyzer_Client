import { GraphFilter } from "../../model/GraphFilter";

export interface IGraphProps extends React.Props<any>{
    toggleGraph?: () => void;
    graphEnabled: boolean;
    history: any[];
    graphFilter: GraphFilter;
    updateGraphFilter: (filter: GraphFilter) => void;
}