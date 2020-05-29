import React from 'react';
import { connect } from 'react-redux';

import styles from './ChatBody.module.scss';
import { IChatBodyProps } from './IChatBodyProps';
import Message from '../Message/Message';
import { Status } from '../../../model/Status';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const ChatBody: React.FC<IChatBodyProps> = ({ messages, userId, clicked, status }) => {
    return (
        <div className={styles.chatBody}>
            {status === Status.Active
                ? (<div className={styles.container}>
                    {messages.map(message => (
                        <Message key={message.id} message={message} isOwner={message.ownerId === userId} clicked={clicked} />
                    ))}
                </div>)
                : <LoadingScreen status={status} />
            }
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    messages: state.chat.messages,
    status: state.api.status
})

export default connect(mapStateToProps)(ChatBody);