import React from 'react';

import styles from './Message.module.scss';

import { IMessageProps } from './IMessageProps';
import { dateOptions } from '../../../constants';

const Message: React.FC<IMessageProps> = ({message, isOwner, clicked}) => {
    return (
    <div className={`${styles.message} ${isOwner ? styles.owned : ''}`} onClick={clicked}>
        <p className={styles.content}>{message.text}</p>
        <p className={styles.timestamp}>{message.timestamp.toLocaleDateString("en-US", dateOptions)}</p>
    </div>)
}

export default Message;