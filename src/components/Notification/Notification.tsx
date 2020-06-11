import React from 'react';
import { connect } from 'react-redux';

import styles from './Notification.module.scss';

import { INotificationProps } from './INotificationProps';
import Toast from '../Common/Toast/Toast';
import { INotification } from '../../model/INotification';
import { setNotification } from '../../redux/controls/controlsActions';

const Notification: React.FC<INotificationProps> = ({ notification, setNotification, activeNotifications }) => {
    if (!notification?.hidden && notification?.text) {
        setTimeout(() => setNotification({ ...notification, hidden: true }), notification?.timer || 1500);
    }

    return activeNotifications
        ? (<div className={styles.notification}>
            <Toast {...notification} className={notification.hidden ? styles.hidden : styles.visible}/>
        </div>)
        : null;
}

const mapStateToProps = (state: any) => ({
    activeNotifications: state.controls.activeNotifications,
    notification: state.controls.notification
})

const mapDispatchToProps = (dispatch: any) => ({
    setNotification: (notification: INotification) => dispatch(setNotification(notification))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);