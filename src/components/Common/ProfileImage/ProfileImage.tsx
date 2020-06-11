import React from 'react';

import styles from './ProfileImage.module.scss';

import { IProfileImageProps } from './IProfileImageProps';
import defaultPicture from '../../../assets/default.png';

const ProfileImage: React.FC<IProfileImageProps> = (props: IProfileImageProps) => {
    const elementStyle = {
        backgroundImage: `url(${props.imageUrl || defaultPicture})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: props.size,
        height: props.size
    }

    return (
        <div className={styles.profileImage} style={elementStyle}>
        </div >
    )
}

export default ProfileImage;