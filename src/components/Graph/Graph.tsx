import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import styles from './Graph.module.scss';

import Modal from '../Common/Modal/Modal';
import { toggleGraph, changeGraphFilter } from '../../redux/controls/controlsActions';
import { IGraphProps } from './IGraphProps';
import BarChart from './BarChart/BarChart';
import GraphPanel from './GraphPanel/GraphPanel';
import { graphTitle, defaultConfidenceLimit } from '../../constants';
import { MdClose } from 'react-icons/md';
import IconButton from '../Common/IconButton/IconButton';
import { GraphFilter } from '../../model/GraphFilter';

class Graph extends React.Component<IGraphProps, {}> {

    state = {
        refresh: false
    }

    render() {
        const { history, toggleGraph, graphEnabled, graphFilter, updateGraphFilter } = this.props;
        const confidenceLimit = 0.85;
        let data: any[];

        switch (graphFilter) {
            case GraphFilter.Confident:
                data = history.filter((item: any) => item.confidence > (confidenceLimit || defaultConfidenceLimit));
                break;
            case GraphFilter.Unconfident:
                data = history.filter((item: any) => item.confidence <= (confidenceLimit || defaultConfidenceLimit));
                break;
            default:
                data = [...history]
        }


        return graphEnabled ? (
            <Modal onClose={toggleGraph}>
                <div className={styles.graph}>
                    <div className={styles.header}>
                        <IconButton title="close" onClick={toggleGraph} className={styles.closeButton}>
                            <MdClose />
                        </IconButton>
                    </div>
                    <BarChart width={900} height={500} title={graphTitle} data={data} refresh={this.state.refresh} confidenceLimit={defaultConfidenceLimit} />
                    <GraphPanel filter={graphFilter} refresh={this.refreshHandler} update={this.filterHandler} />
                </div>
            </Modal>)
            : null
    }

    refreshHandler = () => {
        this.setState({refresh: true})
    }

    filterHandler = (newFilter: any) => {
        if (newFilter !== this.props.graphFilter){
            this.setState({refresh: false});
            this.props.updateGraphFilter(newFilter);
        } 
    }
}

const mapStateToProps = (state: any) => ({
    graphEnabled: state.controls.graph,
    history: state.chat.sessionHistory,
    graphFilter: state.controls.graphFilter
})

const mapDispatchToProps = (dispatch: any) => ({
    toggleGraph: () => dispatch(toggleGraph()),
    updateGraphFilter: (filter: GraphFilter) => dispatch(changeGraphFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Graph);