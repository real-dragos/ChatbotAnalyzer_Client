import React from 'react';
import { FiMaximize2, FiVolume2 } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import styles from './ChatHeader.module.scss';

import { IChatHeaderProps } from './IChatHeaderProps';
import IconButton from '../../Common/IconButton/IconButton';

const ChatHeader: React.FC<IChatHeaderProps> = ({name}) => {
    return (
        <div className={styles.chatHeader}>
            <div className={styles.left}>
                <h1 className={styles.title}>{name}</h1>
            </div>
            <div className={styles.right}>
                <IconButton className={styles.headerIcon}><FiVolume2 /></IconButton>
                <IconButton className={styles.headerIcon}><FiMaximize2 /></IconButton>
                <IconButton className={styles.headerIcon}><MdClose /></IconButton>
            </div>
        </div>
    )
}

export default ChatHeader;