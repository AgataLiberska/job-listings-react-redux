import jobListings from '../jobListings';

const initialState = { jobs: jobListings, filters: []};

const matchJob = (filter, job) => filter === job.role || filter === job.level || job.languages.includes(filter) || job.tools?.includes(filter);

const filterJobs = (jobsArr, filtersArr) => {
    const jobsToDisplay = jobsArr.filter(job => {
        let isMatch = true;

        for (let i=0; i < filtersArr.length; i++ ) {
            if (!matchJob(filtersArr[i], job)) {
                isMatch = false;
            }
        }
        return isMatch;
    });

    return jobsToDisplay;
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FILTER':
            if (state.filters.includes(action.payload)) {
                return {...state };
            } else {
                return {
                    ...state,
                    filters: [...state.filters, action.payload],
                    jobs: filterJobs([...state.jobs], [...state.filters, action.payload]),
                };
            };
        case 'REMOVE_FILTER':
            return {
                ...state,
                filters: state.filters.filter(filter => filter !== action.payload),
                jobs: filterJobs([...initialState.jobs], state.filters.filter(filter => filter !== action.payload)),
            };
        case 'REMOVE_ALL_FILTERS':
            return initialState;
        default:
            return state;
    }
    
}

export default rootReducer;