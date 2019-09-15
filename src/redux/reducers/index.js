import {combineReducers} from 'redux';
import taskReducer from './taskReducer';
import visibilityFilter from './visibilityFilter';
import sortReducer from './sortReducer';

const rootReducer = combineReducers({
    tasks: taskReducer,
    visibilityFilter,
    sortFilter: sortReducer
})

export default rootReducer;