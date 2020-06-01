import React from 'react';

import styles from './Modal.module.scss';

import BackDrop from '../BackDrop/BackDrop';

const Modal: React.FC<any> = (props: any) => (
    <div className={styles.modal}>
        <div className={styles.container}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
        <BackDrop clicked={props.onClose} />
    </div>
)

export default Modal;