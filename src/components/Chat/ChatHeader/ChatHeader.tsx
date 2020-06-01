import React from 'react';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { MdDelete, MdNotificationsOff, MdNotificationsActive } from 'react-icons/md';
import { connect } from 'react-redux';

import styles from './ChatHeader.module.scss';

import { clearMessages } from '../../../redux/chat/chatActions';
import { IChatHeaderProps } from './IChatHeaderProps';
import IconButton from '../../Common/IconButton/IconButton';

const ChatHeader: React.FC<IChatHeaderProps> = ({ toggleNotifications, name, mobileView, toggleView, clearMessages, activeNotifications }) => {
    return (
        <div className={styles.chatHeader}>
            <div className={styles.left}>
                <h1 className={`${styles.title} ${mobileView && styles.mobile}`}>{name}</h1>
            </div>
            <div className={styles.right}>
                <IconButton className={styles.headerIcon} title='Notifications' onClick={toggleNotifications}>{activeNotifications ? <MdNotificationsActive /> : < MdNotificationsOff />}</IconButton>
                <IconButton className={styles.headerIcon} title={mobileView ? "Maximize" : "Minimize"} onClick={toggleView}>{mobileView ? <FiMaximize2 /> : <FiMinimize2 />}</IconButton>
                <IconButton className={styles.headerIcon} title='Clear messages' onClick={clearMessages}><MdDelete /></IconButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    clearMessages: () => dispatch(clearMessages())
})

export default connect(null, mapDispatchToProps)(ChatHeader);