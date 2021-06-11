export const addFilter = filter => {
    return {
        type: 'ADD_FILTER',
        payload: filter
    }
}

export const removeFilter = filter => {
    return {
        type: 'REMOVE_FILTER',
        payload: filter
    }
}

export const removeAllFilters = () => {
    return {
        type: 'REMOVE_ALL_FILTERS'
    }
}