import React from 'react';
import { connect } from 'react-redux';
import {
    FilterListWrapper,
    FilterListContainer,
    FiltersWrapper,
    Filter,
    ClearFilters
} from './FilterListElements';

class FilterList extends React.Component {
    renderFilters() {
        return (
            this.props.filters.map(filter => {
                return (
                    <Filter >{filter}</Filter>
                )
            })
        )
    }


    render() {
        if (this.props.filters.length === 0) {
            return null;
        }

        return (
            <FilterListWrapper>
                <FilterListContainer>
                    <FiltersWrapper>
                        {this.renderFilters()}
                    </FiltersWrapper>
                    <ClearFilters>Clear</ClearFilters>
                </FilterListContainer>
            </FilterListWrapper>
        )
    }
}

const mapStateToProps = state => {
    return { filters: state.filters }
}

export default connect(mapStateToProps)(FilterList);