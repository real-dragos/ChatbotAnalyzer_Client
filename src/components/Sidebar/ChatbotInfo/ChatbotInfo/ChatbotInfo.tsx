import React from 'react';

import styles from './ChatbotInfo.module.scss';
import { IChatbotInfoProps } from './IChatbotInfoProps';

const ChatbotInfo: React.FC<IChatbotInfoProps> = (props: IChatbotInfoProps) => (
    <div className={styles.chatbotInfo}>
        <p className={styles.label}>{props.label}:</p>
        <p className={styles.value}>{props.value}</p>
    </div>
)

export default ChatbotInfo;