import React from 'react';

import styles from './Filter.module.scss';

import { IFilterProps } from './IFilterProps';

const Filter: React.FC<IFilterProps> = ({ filterData, name, selectedValue, className, filterHandler }) => (
    <div className={`${styles.filter} ${className}`}>
        {filterData.map((filter: any, index: number) => (
            <label key={filter.id} className={styles.container}>{filter.label}
                <input type="radio" name={name} value={filter.value} defaultChecked={filter.value === selectedValue} onClick={filterHandler} />
                <span className={styles.checkmark}></span>
            </label>
        ))}
    </div>
)

export default Filter;