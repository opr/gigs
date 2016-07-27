import { List, Map, fromJS } from 'immutable';

const init = List(['ake']);

export default function(state=init, action) {
    switch(action.type) {
        case 'INIT_STATE':
            return List([]);
        case 'SET_SEARCH_RESULTS':
            console.log(action);
            return state.set('searchResults', fromJS(action.payload));
        default:
            return state;
    }
}