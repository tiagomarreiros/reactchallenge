import {combineReducers} from 'redux';
import taskReducer from './taskReducer';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    tasks: taskReducer,
    visibilityFilter
})

export default rootReducer;