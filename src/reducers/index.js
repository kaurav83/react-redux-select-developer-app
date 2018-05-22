import {users, language} from './initial_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    users,
    language
})

export default rootReducer;