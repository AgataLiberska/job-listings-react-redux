const filtersReducer = (filters = [], action) => {
    console.log(filters);
    switch(action.type) {
        case 'ADD_FILTER':
            return [...filters, action.payload];
        default:
            return filters;
    }
    
}

export default filtersReducer;