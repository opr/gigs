import { List, Map, fromJS } from 'immutable';

const init = Map();

export default function(state=init, action) {
    switch(action.type) {
        case 'INIT_STATE':
            return Map();
        case 'SET_SEARCH_RESULTS':
            return state.set('searchResults', fromJS(action.payload));
        default:
            return state;
    }
}