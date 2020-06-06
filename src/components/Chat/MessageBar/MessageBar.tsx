import React, { useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai'

import styles from './MessageBar.module.scss';

import IconButton from '../../Common/IconButton/IconButton';
import { IMessageBarProps } from './IMessageBarProps';
import { connect } from 'react-redux';
import { Status } from '../../../model/Status';
import Callout from '../../Common/Callout/Callout';
import { ISuggestionsGroup } from '../../../model/ISuggestionsGroup';

const MessageBar: React.FC<IMessageBarProps> = ({ submitMessage, status }) => {
    const suggestionGroups: ISuggestionsGroup[] = [
        {
            label: 'Greetings',
            suggestions: ['Hello!', 'How are you?']
        },
        {
            label: 'Thanks',
            suggestions: ['Thank you very much!', 'It helped. Thanks!']
        },
        {
            label: 'Help',
            suggestions: ['I need help', 'What can you do?']
        },
        {
            label: 'Others',
            suggestions: ['What is your name?', 'How are you?']
        }
    ]

    const isReadOnly = status !== Status.Active;

    const calloutRef = useRef<HTMLDivElement>(null);
    const toggleCallout = () => {
        calloutRef.current?.classList.toggle(styles.show);
    }
    const messageRef = useRef<HTMLInputElement>(null);
    const submitFormHandler = (event: any) => {
        event.preventDefault(); 
        submitMessage(event.target.elements.message.value);
        event.target.message.value = ''
    }


    return (
        <div className={styles.messageBar}>
            <div className={styles.suggestionsContainer}>
                <IconButton className={styles.optionsButton} title="Suggestions" onClick={toggleCallout}>
                    <AiOutlineMessage />
                </IconButton>
                <div className={styles.suggestions} ref={calloutRef}>
                    <Callout>
                        <div className={styles.calloutContent}>
                            <h2>Suggestions</h2>
                            <hr/>
                            <ul>
                                {suggestionGroups.map((group) => (
                                    <li key={group.label}>
                                        <h3>{group.label}</h3>
                                        {group.suggestions.map((suggestion, index) => 
                                        (<a key={index} href='#' onClick={() => {submitMessage(suggestion); toggleCallout();}}>{suggestion}</a>))}    
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Callout>
                </div>
            </div>
            <form className={styles.chatForm} onSubmit={submitFormHandler}>
                <input className={styles.textField} type="text" name="message" autoComplete="off" placeholder='Type your message here...' readOnly={isReadOnly} ref={messageRef}/>
                <IconButton className={styles.sendButton} title="Send Message"><FaPaperPlane /></IconButton>
            </form>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    status: state.api.status
})

export default connect(mapStateToProps)(MessageBar);