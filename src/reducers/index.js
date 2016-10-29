import {combineReducers} from 'redux';
import home from './home';
import event from './event';

// this combines all of the reducers made in this folder
export default combineReducers({
    home, event
})