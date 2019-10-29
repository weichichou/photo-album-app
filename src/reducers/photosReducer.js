export default (state=[], action ={}) => {
    switch(action.type){
        case 'SET_PHOTOS':
            // What is the difference between this and just return action.payload?
            return [...action.payload]
        default:
            return state
    }
}