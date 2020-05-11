import React from 'react';

import styles from './ChatbotInfoPane.module.scss';
import { reponseTimeLabel, currentContextLabel, intentsSizeLabel, vocabularySizeLabel, confidenceLevelLabel } from '../../../constants';
import ChatbotInfo from './ChatbotInfo/ChatbotInfo';
import { IChatbotInfoPaneProps } from './IChatbotInforPaneProps';

const ChatbotInfoPane: React.FC<IChatbotInfoPaneProps> = ({currentChatbot, responseTime, currentContext, confidenceLevel}) => (
    <div className={styles.chatbotInfo}>
        <div className={styles.chatbotStatistics}>
            {currentChatbot ? <ChatbotInfo label={intentsSizeLabel} value={currentChatbot.metadata.intentsSize}/> : null}
            {currentChatbot ? <ChatbotInfo label={vocabularySizeLabel} value={currentChatbot.metadata.vocabularySize}/> : null}
            <ChatbotInfo label={reponseTimeLabel} value={`${responseTime || 0} ms`}/>
            <ChatbotInfo label={currentContextLabel} value={currentContext || '_'}/>
            <ChatbotInfo label={confidenceLevelLabel} value={`${confidenceLevel || '0'}%`}/>
        </div>
    </div>
);

export default ChatbotInfoPane;