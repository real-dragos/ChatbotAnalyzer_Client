import React from 'react';

import styles from './Tooltip.module.scss';

import { ITooltipProps } from './ITooltipProps';
import { tooltipID, tooltipTitleID, tooltipBarID, tooltipMessageID, tooltipReplyID, tooltipValueID, tooltipBarFillID, tooltipBarValueID } from '../../../../constants';

const Tooltip: React.FC<ITooltipProps> = (props: ITooltipProps) => {
    return (
        <div id={tooltipID} className={styles.tooltip}>
            <div id={tooltipTitleID} className={styles.tooltipTitle}>
                <p id={tooltipMessageID}></p>
                <p id={tooltipReplyID}></p>
            </div>
            <div id={tooltipValueID} className={styles.tooltipValue}>
                <b><span id={tooltipBarValueID} className={styles.tooltipBarValue}></span></b>
            </div>
            <div id={tooltipBarID} className={styles.tooltipBar}>
                <div id={tooltipBarFillID} className={styles.tooltipBarFill}></div>
            </div>
        </div>
    )
}

export default Tooltip;