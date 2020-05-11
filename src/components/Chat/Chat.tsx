import React from 'react';
import { connect } from 'react-redux';

import styles from './Chat.module.scss';

import { defaultChatbotName } from '../../constants';
import { IChatbot } from '../../model/IChatbot';
import { IChatProps } from './IChatProps';
import { IMessage } from '../../model/IMessage';
import ChatService from '../../services/ChatService';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
import MessageBar from './MessageBar/MessageBar';

class Chat extends React.Component < IChatProps, {} > {

    public render() {
        const {currentChatbot} = this.props;

        return (<div className={styles.chat}>
            <ChatHeader name={currentChatbot ? currentChatbot.name : defaultChatbotName} />
            <ChatBody chatbotId={currentChatbot ? currentChatbot.id : '-1'} clicked={() => console.log('Wow')} />
            <MessageBar submitMessage={this.submitMessageHandler} />
        </div>)
    }

    private submitMessageHandler = (event: any) => {
        event.preventDefault();
        const textMessage = event.target.elements.message.value;
        event.target.message.value = ''
    
        const message: IMessage = {
            id: '-1',
            text: textMessage,
            ownerId: this.props.currentUserId,
            timestamp: new Date()
        }

        ChatService.sendMessage({message, chatbotId: this.props.currentChatbot.id});
    }
}



const mapStateToProps = (state: any) => {
    const { chatbots, selectedChatbotId } = state.chatbot;
    const selectedChatbot = chatbots.find((item: IChatbot) => item.id === selectedChatbotId)

    return {
        currentChatbot: selectedChatbot,
        currentUserId: state.user.id,
    }
}

export default connect(mapStateToProps)(Chat);