import React from 'react';

import styles from './ChatbotSelector.module.scss';
import { IChatbotSelectorProps } from './IChatbotSelectorProps';
import { unavailableServerError } from '../../../../constants';

const ChatbotSelector: React.FC<IChatbotSelectorProps> = ({options, onSelect, selected}) => (
    <div className={styles.chatbotSelector}>
        <div className={styles.select}>
        {options && options.length !== 0 ?
            (<select name="chatbot" id="chatbotSelector" onChange={onSelect} value={selected}>
                 {options.map(option => (<option key={option.id} value={option.id}>{option.name.split('-')[0]}</option>))}  
            </select>)
            : <span className={styles.error}>{unavailableServerError}</span>
        }
        </div>
    </div>
)

export default ChatbotSelector;