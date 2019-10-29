export default (state=[], action) => {
    switch (action.type) {
        case 'ADD_ALBUM':
            return [...state,
                {...action.payload}]
        
        case 'SET_ALBUM':
            return [...action.payload]

        default:
            return state    
    }
}

