import React from 'react';

import styles from './Button.module.scss';

import { IButtonProps } from './IButtonProps';

const Button: React.FC<IButtonProps> = (props: IButtonProps) => (
    <button title={`${props.title}`} className={`${styles.button} ${props.className}`} onClick={props.onClick}>
        {props.children}
    </button>
)

export default Button;