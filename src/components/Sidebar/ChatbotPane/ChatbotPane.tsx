import React from 'react';
import { connect } from 'react-redux';
import {FaBeer, FaPaw, FaMagnet} from 'react-icons/fa';

import styles from './ChatbotPane.module.scss';

import ProfileImage from '../../Common/ProfileImage/ProfileImage';
import ChatbotSelector from './ChatbotSelector/ChatbotSelector';
import ChatbotOptions from './ChatbotOptions/ChatbotOptions';
import { ICommand } from '../../../model/ICommand';
import { IChatbotPaneProps } from './IChatbotPaneProps';


const ChatbotPane: React.FC<IChatbotPaneProps> = ({chatbots, currentChatbot, onSelectChatbot, status}) => {
    const options: ICommand[] = [
        {id: 'opt1', icon: <FaBeer />, callback: () => console.log('Beer')},
        {id: 'opt2', icon: <FaPaw />, callback: () => console.log('Paw')},
        {id: 'opt3', icon: <FaMagnet />, callback: () => console.log('Magnet')}
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
    status: state.api.status
})

export default connect(mapStateToProps)(ChatbotPane);