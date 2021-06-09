import jobListings from '../jobListings';

const jobsReducer = (jobs = jobListings) => {
    return jobs;
}

export default jobsReducer;