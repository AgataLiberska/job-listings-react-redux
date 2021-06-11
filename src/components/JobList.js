import React from 'react';
import { connect } from 'react-redux';
import { addFilter } from '../actions';
import { 
    JobListWrapper,       
    JobListContainer, 
    JobCard,
    JobLogo,
    JobInfo,
    JobIntro,
    JobCompany,
    JobNew,
    JobFeatured, 
    JobPosition,
    JobDetail,
    JobFilterContainer,
    JobFilter
} from './JobListElements';

class JobList extends React.Component {
    renderJobs() {
        return (
            this.props.jobs.map(job => {
                return (
                    <JobCard key={job.id.toString()}>
                        <JobLogo src={job.logo} alt="company logo"/>
                        <JobInfo>
                            <JobIntro>
                                <JobCompany>{job.company}</JobCompany>
                                { job.new ? <JobNew>new!</JobNew> : null }
                                { job.featured ? <JobFeatured>featured</JobFeatured> : null }
                            </JobIntro>
                            <div>
                                <JobPosition href="/">{job.position}</JobPosition>
                            </div>
                            <div>
                                <JobDetail>{job.postedAt}</JobDetail>
                                <JobDetail>{job.contract}</JobDetail>
                                <JobDetail>{job.location}</JobDetail>
                            </div>
                        </JobInfo>
                        <JobFilterContainer>
                            <JobFilter onClick={() => this.props.addFilter(job.role)}>
                                {job.role}
                            </JobFilter>
                            <JobFilter onClick={() => this.props.addFilter(job.level)}>
                                {job.level}
                            </JobFilter>
                            { job.languages ? 
                                job.languages.map(language => (
                                <JobFilter onClick={() => this.props.addFilter(language)}>
                                    {language}
                                </JobFilter>))
                                : null }
                            { job.tools ? 
                                job.tools.map(tool => (
                                <JobFilter onClick={() => this.props.addFilter(tool)}>
                                    {tool}
                                </JobFilter>)) 
                                : null }
                        </JobFilterContainer>
                    </JobCard>
                );
            })
        );
    };

    render() {
        return (
            <JobListWrapper>
                <JobListContainer>
                    {this.renderJobs()}
                </JobListContainer>
            </JobListWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs }
}

export default connect(mapStateToProps, { addFilter })(JobList);