import React from 'react';
import { connect } from 'react-redux';
import {
    FilterListWrapper,
    FilterListContainer,
    FiltersWrapper,
    ClearFilters

} from './FilterListElements';

class FilterList extends React.Component {
    render() {
        if (this.props.filters.length === 0) {
            return null;
        }

        return (
            <FilterListWrapper>
                <FilterListContainer>
                    <FiltersWrapper>

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