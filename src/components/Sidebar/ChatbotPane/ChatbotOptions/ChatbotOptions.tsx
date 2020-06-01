import React from 'react';

import styles from './ChatbotOptions.module.scss';

import { IChatbotOptionsProps } from './IChatbotOptionsProps';
import IconButton from '../../../Common/IconButton/IconButton';

const ChatbotOptions: React.FC<IChatbotOptionsProps> = (props: IChatbotOptionsProps) => (
    <div className={styles.chatbotOptions}>
        {props.options.map(option => 
            <IconButton className={styles.option} 
                        key={option.id} 
                        onClick={option.callback}
                        title={option.title}>
                        {option.icon}
            </IconButton>)
        }
    </div>
)

export default ChatbotOptions;
