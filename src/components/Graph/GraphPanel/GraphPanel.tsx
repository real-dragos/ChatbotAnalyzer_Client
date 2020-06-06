import React from 'react';
import * as d3 from 'd3';

import styles from './GraphPanel.module.scss';

import Button from '../../Common/Button/Button';
import Filter from '../../Common/Filter/Filter';
import { IFilter } from '../../../model/IFilter';
import { IGraphPanelProps } from './IGraphPanelProps';
import { GraphFilter } from '../../../model/GraphFilter';
import { refreshGraphButton, exportGraphButton, graphFilterType, confidenceChartId } from '../../../constants';
import FileService from '../../../services/FileService';

const filterData: IFilter[] = [
    {
        id: 'filter1',
        label: 'All',
        value: GraphFilter.All
    },
    {
        id: 'filter2',
        label: 'Confident',
        value: GraphFilter.Confident
    },
    {
        id: 'filter3',
        label: 'Unconfident',
        value: GraphFilter.Unconfident
    }
]

const GraphPanel: React.FC<IGraphPanelProps> = ({ refresh, update, filter }) => {
    return (
        <div className={styles.graphPanel}>
            <div className={styles.filter}>
                <Filter filterData={filterData} name={graphFilterType} selectedValue={filter} filterHandler={(event) => update(event.target.value)} />
            </div>
            <div className={styles.controls}>
                <Button title={refreshGraphButton} className={styles.graphButton} onClick={refresh}>
                    <p>{refreshGraphButton}</p>
                </Button>
                <Button title={exportGraphButton} className={styles.graphButton} onClick={exportGraphToPng}>
                    <p>{exportGraphButton}</p>
                </Button>
            </div>
        </div>
    )
}

const exportGraphToPng = () =>{
    const svg = d3.select(`#${confidenceChartId}`);
    FileService.saveSVG(svg);
}

export default GraphPanel;