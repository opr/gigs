import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

var SearchResults = React.createClass({
    render: function () {
        return <div className="search-results">
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        searchResults: state.get('searchResults')
    }
};

let SearchResultsContainer = connect(mapStateToProps)(SearchResults);
module.exports = SearchResultsContainer;