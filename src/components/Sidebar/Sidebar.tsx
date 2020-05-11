import React from 'react';
import { connect } from 'react-redux';

import styles from './Sidebar.module.scss';
import ChatbotPane from './ChatbotPane/ChatbotPane';
import ChatbotInfoPane from './ChatbotInfo/ChatbotInfoPane';
import { selectChatbot } from '../../redux/chatbots/chatbotsActions';
import { IChatbot } from '../../model/IChatbot';
import { ISidebarProps } from './ISidebarProps';

const Sidebar: React.FC<ISidebarProps> = ({chatbots, chatbot, selectChatbot}) => {
    return (
        <div className={styles.sidebar}>
            <ChatbotPane chatbots={chatbots} currentChatbot={chatbot} onSelectChatbot={selectChatbot}/>
            <ChatbotInfoPane currentChatbot={chatbot}/>
        </div>
    )
}

const mapStateToProps = (state: any) => {

    const {chatbots, selectedChatbotId} = state.chatbot;
    const selectedChatbot = chatbots.find((item: IChatbot) => item.id === selectedChatbotId)

    return {
        chatbot: selectedChatbot,
        chatbots: state.chatbot.chatbots
    }   
}

const mapDispatchToProps = (dispatch: any) => ({
    selectChatbot: (id: string) => dispatch(selectChatbot(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);