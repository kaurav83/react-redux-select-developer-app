import React, {Component} from 'react';
import styles from './UserList.css';
import User from './User';

class UserList extends Component {

    render() {
        const {users} = this.props;

        return (
            <div className={styles.shout}>
                {
                    users.map(user => 
                        <User 
                            key={user.login}
                            name={user.login}
                            avatar={user.avatar_url}
                            link={user.url}
                        />
                    )
                }
            </div>
        )
    }
}

export default UserList;