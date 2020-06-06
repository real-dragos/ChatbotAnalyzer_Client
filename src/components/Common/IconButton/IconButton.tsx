import React from 'react';
import { connect } from 'react-redux';

import styles from './IconButton.module.scss';

import { IconButtonProps } from './IconButtonProps';
import { Status } from '../../../model/Status';

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => (
    <button title={`${props.title}`} className={`${props.className} ${styles.iconButton} ${props.status !== Status.Active && styles.disabled}`} onClick={props.onClick}>
        {props.children}
    </button>
)

const mapStateToProps = (state: any) => ({
    status: state.api.status
})

export default connect(mapStateToProps)(IconButton);