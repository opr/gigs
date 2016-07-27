export function setSearchResults(results) {
    return {
        type: 'SET_SEARCH_RESULTS',
        payload: results
    };
}
export function initState() {
    return {
        type: 'INIT_STATE'
    };
}