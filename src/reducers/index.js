import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    jobs: jobsReducer,
    filters: filtersReducer,
})