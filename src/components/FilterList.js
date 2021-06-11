import React from 'react';
import { connect } from 'react-redux';
import { removeFilter, removeAllFilters } from '../actions';
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
                    <Filter key={filter} onClick={() => this.props.removeFilter(filter)}>{filter}</Filter>
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
                    <ClearFilters onClick={()=> this.props.removeAllFilters()}>Clear</ClearFilters>
                </FilterListContainer>
            </FilterListWrapper>
        )
    }
}

const mapStateToProps = state => {
    return { filters: state.filters }
}

export default connect(mapStateToProps, { removeFilter, removeAllFilters })(FilterList);