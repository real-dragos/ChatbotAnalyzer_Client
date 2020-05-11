import React from 'react';

import styles from './LoadingScreen.module.scss';

import { loadindMessagesLabel, unavailableServerError } from '../../../constants';
import { ILoadingScreenProps } from './ILoadingScreenProps';
import { Status } from '../../../model/Status';

const LoadingScreen: React.FC<ILoadingScreenProps> = ({status}) => (
    <div className={styles.loadingScreen}>
        <h1 className={styles.title}>{status === Status.Pending ? loadindMessagesLabel : unavailableServerError}</h1>
    </div>
)

export default LoadingScreen;