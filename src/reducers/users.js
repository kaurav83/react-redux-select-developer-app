import {
    SELECT_LANGUAGE,
    REQUEST_USERS,
    RECEIVE_USERS
} from '../actions';

function language(state="C++", action) {
    switch(action.type) {
        case SELECT_LANGUAGE:
            return action.language
        default:
            return state;
    }
}

function users(state={isFetching: false, items: []}, action) {
    switch(action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_USERS:
            return {
                ...state,
                isFetching: false,
                items: action.users
            }
        default: 
            return state;
    }
}

export {users, language};