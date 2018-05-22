import React, { Component, PropTypes } from 'react';

import  './User.css';

export default class User extends Component {
    render() {
        const { link, name, avatar } = this.props;

        return (
            <a href={link} target='_blank' className="root">
                <img className="avatar" src={avatar} />
                <div className="info">
                    <div className="name"> {name} </div>
                </div>
            </a>
        );
    }
}
