import { combineReducers } from 'redux';
import jobsReducer from './JobsReducer';

export default combineReducers({
    jobs: jobsReducer,
})