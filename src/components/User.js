import React from 'react';

import styles from './User.css';

const User = (props) => {
    return (
        <a href={props.link} target='_blank'  className={styles.root}>
            <img src={props.avatar} alt="avatar" className={styles.avatar} />
            <div className={styles.info}>
                <div>{props.name}</div>
            </div>
        </a>
    )
}

export default User;