export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return setEntries(state, action.entries);
    }
    return state;
}