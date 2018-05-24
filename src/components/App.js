import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers, selectLanguage}  from '../actions';
import Picker from './Picker';
import UserList from './UserList';
// import styles from './App.css';

const LANGUAGES = [
    'PHP',
    'Java',
    'JavaScript',
    'Python',
    'CSS',
    'C++',
    'C#',
    'C',
    'Perl',
    'GO',
    'Objective-c',
    'Shell'
]

class App extends Component {
    componentDidMount() {
        const {selectedLanguage, onFetchUsers} = this.props;

        onFetchUsers(selectedLanguage);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLanguage !== this.props.selectedLanguage) {
            const { selectedLanguage, onFetchUsers } = nextProps;

            onFetchUsers(selectedLanguage);
        }
    }

    handleLanguageChange = (language) => {
        const {onLanguageSelect} = this.props;

        onLanguageSelect(language);
    }

    render() {
        const {users, selectedLanguage, isFetching} = this.props;

        return(
            <div>
                <Picker 
                    value={selectedLanguage}
                    options={LANGUAGES}
                    onChange={this.handleLanguageChange}
                />

                {
                    isFetching ?
                        'Загрузка...'
                    : 
                        <UserList users={users} />
                }
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.items,
        isFetching: state.users.isFetching,
        selectedLanguage: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLanguageSelect: (language) => dispatch(selectLanguage(language)),
        onFetchUsers: (language) => dispatch(fetchUsers(language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);