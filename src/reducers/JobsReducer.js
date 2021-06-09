import jobListings from '../jobListings.json';

const jobsReducer = (jobs = jobListings) => {
    return jobs;
}

export default jobsReducer;