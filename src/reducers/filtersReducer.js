const filtersReducer = (filters = [], action) => {
    console.log(filters);
    switch(action.type) {
        case 'ADD_FILTER':
            if (filters.includes(action.payload)) {
                return filters;
            } else {
                return [...filters, action.payload];
            }
        default:
            return filters;
    }
    
}

export default filtersReducer;