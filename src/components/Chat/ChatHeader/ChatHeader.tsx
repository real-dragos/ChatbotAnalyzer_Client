import React from 'react';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { MdDelete, MdNotificationsOff, MdNotificationsActive } from 'react-icons/md';
import { connect } from 'react-redux';

import styles from './ChatHeader.module.scss';

import { clearMessages } from '../../../redux/chat/chatActions';
import { IChatHeaderProps } from './IChatHeaderProps';
import IconButton from '../../Common/IconButton/IconButton';
import { INotification } from '../../../model/INotification';
import { setNotification } from '../../../redux/controls/controlsActions';
import { enableNotificationMessage } from '../../../constants';

const ChatHeader: React.FC<IChatHeaderProps> = ({ toggleNotifications, name, mobileView, toggleView, clearMessages, activeNotifications, setNotification }) => {
    const toggleNotification = () => {
        let notification: INotification = {type: "Primary", text: "", position: "top", timer: 3000}
        if(!activeNotifications) {
            notification.text = enableNotificationMessage;
        }
        setNotification(notification);
        toggleNotifications && toggleNotifications();
    }
    
    return (
        <div className={styles.chatHeader}>
            <div className={styles.left}>
                <h1 className={`${styles.title} ${mobileView && styles.mobile}`}>{name}</h1>
            </div>
            <div className={styles.right}>
                <IconButton className={styles.headerIcon} title='Notifications' onClick={toggleNotification}>{activeNotifications ? <MdNotificationsActive /> : < MdNotificationsOff />}</IconButton>
                <IconButton className={styles.headerIcon} title={mobileView ? "Maximize" : "Minimize"} onClick={toggleView}>{mobileView ? <FiMaximize2 /> : <FiMinimize2 />}</IconButton>
                <IconButton className={styles.headerIcon} title='Clear messages' onClick={clearMessages}><MdDelete /></IconButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    clearMessages: () => dispatch(clearMessages()),
    setNotification: (notification: INotification) => dispatch(setNotification(notification))
})

export default connect(null, mapDispatchToProps)(ChatHeader);