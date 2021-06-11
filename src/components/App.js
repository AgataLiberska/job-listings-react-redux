import React from 'react';
import JobList from './JobList';
import GlobalStyle from './GlobalStyles';
import FilterList from './FilterList';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <div className="banner" />
            <FilterList />
            <JobList />
        </>
    )
}

export default App;