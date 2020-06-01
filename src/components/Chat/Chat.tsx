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
import { toggleNotifications } from '../../redux/controls/controlsActions';

class Chat extends React.Component<IChatProps, any> {

    state = {
        mobileView: false
    }

    public render() {
        const { activeNotifications, currentChatbot, currentUserId, toggleNotifications } = this.props;
        const { mobileView } = this.state;

        return (<div className={styles.chatContainer}>
            <div className={`${styles.chat} ${mobileView && styles.mobile}`}>
                <ChatHeader toggleNotifications={toggleNotifications} activeNotifications={activeNotifications} name={currentChatbot ? currentChatbot.name : defaultChatbotName} mobileView={mobileView} toggleView={this.toggleView} />
                <ChatBody userId={currentUserId || '-1'} />
                <MessageBar submitMessage={this.submitMessageHandler} />
            </div>
        </div>)
    }

    private toggleView = () => this.setState({ mobileView: !this.state.mobileView })

    private submitMessageHandler = (textMessage: string) => {
        if (!textMessage) {
            return;
        }

        const message: IMessage = {
            id: '-1',
            text: textMessage,
            ownerId: this.props.currentUserId,
            timestamp: new Date()
        }

        ChatService.sendMessage({ message, chatbotId: this.props.currentChatbot.id });
    }
}

const mapStateToProps = (state: any) => {
    const { chatbots, selectedChatbotId } = state.chatbot;
    const selectedChatbot = chatbots.find((item: IChatbot) => item.id === selectedChatbotId)

    return {
        currentChatbot: selectedChatbot,
        currentUserId: state.user.id,
        activeNotifications: state.controls.notifications
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    toggleNotifications: () => dispatch(toggleNotifications()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);