import React from 'react';
import { connect } from 'react-redux';

class JobList extends React.Component {
    renderJobs() {
        return (
            this.props.jobs.map(job => {
                return (
                    <li key={job.id}>
                        <div>
                            <img src={job.logo} alt="company logo"/>
                        </div>
                        <div>
                            <div>
                                <p>{job.company}</p>
                                { job.new ? <span>new!</span> : null }
                                { job.featured ? <span>featured</span> : null }
                            </div>
                            <div>
                                <p>{job.position}</p>
                            </div>
                            <div>
                                <span>{job.postedAt}</span>
                                <span>{job.contract}</span>
                                <span>{job.location}</span>
                            </div>
                        </div>
                        <div>
                            <span>{job.role}</span>
                            <span>{job.level}</span>
                            { job.languages ? job.languages.map(language => (<span>{language}</span>)) : null }
                            { job.tools ? job.tools.map(tool => (<span>{tool}</span>)) : null }
                        </div>
                    </li>
                );
            })
        );
    };

    render() {
        return (
            <ul>
                {this.renderJobs()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs }
}

export default connect(mapStateToProps, {})(JobList);