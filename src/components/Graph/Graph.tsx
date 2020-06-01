import React from 'react';
import { connect } from 'react-redux';

import styles from './Graph.module.scss';

import Modal from '../Common/Modal/Modal';
import { toggleGraph } from '../../redux/controls/controlsActions';
import { IGraphProps } from './IGraphProps';


const Graph: React.FC<IGraphProps> = ({toggleGraph, graphEnabled}) => (
    graphEnabled ? (
    <Modal onClose={toggleGraph}>
        <div className={styles.graph}>
            <h1>Hello Broski</h1>
        </div>
    </Modal>)
    : null
)

const mapStateToProps = (state: any) => ({
    graphEnabled: state.controls.graph
})

const mapDispatchToProps = (dispatch: any) => ({
    toggleGraph: () => dispatch(toggleGraph()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Graph);