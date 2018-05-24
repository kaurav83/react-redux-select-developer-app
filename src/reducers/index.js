import {combineReducers} from 'redux';
import {users, language} from './users';

const rootReducer = combineReducers({
    users,
    language
})

export default rootReducer;