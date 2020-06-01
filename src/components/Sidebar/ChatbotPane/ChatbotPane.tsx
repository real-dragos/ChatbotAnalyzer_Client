import React from 'react';
import { connect } from 'react-redux';
import {FaChartArea, FaSave, FaSyncAlt} from 'react-icons/fa';

import styles from './ChatbotPane.module.scss';

import ProfileImage from '../../Common/ProfileImage/ProfileImage';
import ChatbotSelector from './ChatbotSelector/ChatbotSelector';
import ChatbotOptions from './ChatbotOptions/ChatbotOptions';
import { ICommand } from '../../../model/ICommand';
import { IChatbotPaneProps } from './IChatbotPaneProps';
import { toggleGraph } from '../../../redux/controls/controlsActions';
import FileService from '../../../services/FileService';
import { FileType } from '../../../model/FileType';


const ChatbotPane: React.FC<IChatbotPaneProps> = ({chatbots, currentChatbot, onSelectChatbot, status, toggleGraph, messages}) => {
    const options: ICommand[] = [
        {id: 'opt1', title: 'Show Graph', icon: <FaChartArea />, callback: toggleGraph},
        {id: 'opt2', title: 'Save Conversation', icon: <FaSave />, callback: () => FileService.saveFile(JSON.stringify(messages), 'conversation.json', FileType.JSON)},
        {id: 'opt3', title: 'Refresh', icon: <FaSyncAlt />, callback: () => onSelectChatbot(currentChatbot.id)}
    ]

    return (
    <div className={styles.chatbotPane}>
        <ProfileImage imageUrl={currentChatbot ? currentChatbot.imageUrl : ''} size={120}/>
        <h2 className={styles.statusWrapper}>Status: <span className={styles[status.toLowerCase()]}>{status}</span></h2>
        <ChatbotSelector options={chatbots} selected={currentChatbot ? currentChatbot.id: ''} onSelect={(event: any) => onSelectChatbot(event.target.value)}/>
        <ChatbotOptions options={options}/>
    </div>)
}

const mapStateToProps = (state: any) => ({
    status: state.api.status,
    messages: state.chat.messages
})

const mapDispatchToProps = (dispatch: any) => ({
    toggleGraph: () => dispatch(toggleGraph())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatbotPane);