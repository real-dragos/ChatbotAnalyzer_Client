import React from 'react';
import { connect } from 'react-redux';

import styles from './ChatbotInfoPane.module.scss';
import { reponseTimeLabel, intentLabel, intentsSizeLabel, vocabularySizeLabel, confidenceLabel, numberOfExchangesLabel } from '../../../constants';
import ChatbotInfo from './ChatbotInfo/ChatbotInfo';
import { IChatbotInfoPaneProps } from './IChatbotInforPaneProps';


const ChatbotInfoPane: React.FC<IChatbotInfoPaneProps> = ({currentChatbot, chatMetadata}) => (
    <div className={styles.chatbotInfo}>
        <div className={styles.chatbotStatistics}>
            {currentChatbot ? <ChatbotInfo label={intentsSizeLabel} value={currentChatbot.metadata?.intentsSize}/> : null}
            {currentChatbot ? <ChatbotInfo label={vocabularySizeLabel} value={currentChatbot.metadata?.vocabularySize}/> : null}
            <ChatbotInfo label={reponseTimeLabel} value={`${chatMetadata?.responseTime?.toFixed(2) || 0} ms`}/>
            <ChatbotInfo label={intentLabel} value={chatMetadata?.intent?.toUpperCase() || ' - '}/>
            <ChatbotInfo label={confidenceLabel} value={`${((chatMetadata?.confidence || 0)*100).toFixed()}%`}/>
            <ChatbotInfo label={numberOfExchangesLabel} value={`${chatMetadata?.numberOfExchanges}`}  />
        </div>
    </div>
);

const mapStateToProps = (state: any) => ({
        chatMetadata: state.chat.metadata
});

export default connect(mapStateToProps)(ChatbotInfoPane);