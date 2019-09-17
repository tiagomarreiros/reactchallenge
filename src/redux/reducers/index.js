import {combineReducers} from 'redux';
import taskReducer from './taskReducer';
import visibilityFilter from './visibilityFilter';
import sortReducer from './sortReducer';
//import testImmutable from './taskReducer';

const rootReducer = combineReducers({
    tasks: taskReducer,
    visibilityFilter,
    sortFilter: sortReducer,
    //testImmutable
})

export default rootReducer;