import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai'

import styles from './MessageBar.module.scss';

import IconButton from '../../Common/IconButton/IconButton';
import { IMessageBarProps } from './IMessageBarProps';
import { connect } from 'react-redux';
import { Status } from '../../../model/Status';

const MessageBar: React.FC<IMessageBarProps> = ({submitMessage, status}) => {
    const isReadOnly: boolean = status !== Status.Active;
    return (
        <div className={styles.messageBar}>
            <IconButton className={styles.optionsButton}>
                <AiOutlineMessage />
            </IconButton>
            <form className={styles.chatForm} onSubmit={submitMessage}>
                <input className={styles.textField} type="text" name="message" autoComplete="off" placeholder='Type your message here...' readOnly={isReadOnly}/>
                <IconButton className={styles.sendButton}><FaPaperPlane /></IconButton>
            </form>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    status: state.api.status
})

export default connect(mapStateToProps)(MessageBar);