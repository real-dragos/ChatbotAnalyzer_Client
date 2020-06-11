import React from 'react';

import styles from './Toast.module.scss';

import { IToastProps } from './IToastProps';

const Toast: React.FC<IToastProps> = ({ type, text, className, position }) => (
    <div className={`${styles.toast} ${className} ${type ? styles[type.toLowerCase()] :  styles.primary} ${position ? styles[position.toLowerCase()] : styles.top}`}>
        <p className={styles.text}>{text || "NO TEXT"}</p>
    </div >
)

export default Toast;