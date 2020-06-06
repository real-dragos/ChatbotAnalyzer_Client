export interface IBarChartProps extends React.Props<any> {
    width: number;
    height: number;
    data: any[];
    title?: string;
    confidenceLimit?: number;
    refresh?: any;
}