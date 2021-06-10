import React from 'react';
import JobList from './JobList';
import GlobalStyle from './GlobalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <div className="banner" />
            <JobList />
        </>
    )
}

export default App;