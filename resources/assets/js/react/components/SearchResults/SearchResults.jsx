import React from 'react';
import {render} from 'react-dom';


var SearchResults = React.createClass({
    render: function () {
        return <div className="search-results">{this.props.searchResults}
        </div>;
    }
});

module.exports = SearchResults;