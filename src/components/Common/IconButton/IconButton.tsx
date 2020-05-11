import React from 'react';

import styles from './IconButton.module.scss';
import { IconButtonProps } from './IconButtonProps';
import { connect } from 'react-redux';
import { Status } from '../../../model/Status';

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => (
    <button className={`${props.className} ${styles.iconButton} ${props.status !== Status.Active && styles.disabled}`} onClick={props.onClick}>
        {props.children}
    </button>
)

const mapStateToProps = (state: any) => ({
    status: state.api.status
})

export default connect(mapStateToProps)(IconButton);