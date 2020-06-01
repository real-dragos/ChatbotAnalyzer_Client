import React from 'react';

import styles from './BackDrop.module.scss';

import { IBackDropProps } from './IBackDropProps';

const BackDrop: React.FC<IBackDropProps> = ({clicked}) => (
    <div className={styles.backDrop} onClick={clicked}/>
)

export default BackDrop;