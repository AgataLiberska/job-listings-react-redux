const filtersReducer = (filters = [], action) => {
    switch(action.type) {
        case 'ADD_FILTER':
            if (filters.includes(action.payload)) {
                return filters;
            } else {
                return [...filters, action.payload];
            };
        case 'REMOVE_FILTER':
            return filters.filter(filter => filter !== action.payload);
        case 'REMOVE_ALL_FILTERS':
            return [];
        default:
            return filters;
    }
    
}

export default filtersReducer;