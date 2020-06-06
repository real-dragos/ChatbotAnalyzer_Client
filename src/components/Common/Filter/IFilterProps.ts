import { IFilter } from "../../../model/IFilter";

export interface IFilterProps extends React.Props<any> {
    filterData: IFilter[],
    className?: string;
    selectedValue?: string;
    name: string;
    filterHandler: (event: any) => void;
}