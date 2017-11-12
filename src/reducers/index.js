import { combineReducers } from 'redux';
import authData from './authData';
import search from './search';

export default combineReducers({
    authData,
    search
});