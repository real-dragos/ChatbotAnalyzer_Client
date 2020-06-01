import React from 'react';

import styles from './Callout.module.scss';

const Callout: React.FC<any> = ({ children }) => (
    <div className={styles.callout}>
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    </div>
)

export default Callout;