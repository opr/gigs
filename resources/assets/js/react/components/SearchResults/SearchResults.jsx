import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import SearchResult from './SearchResult';

var SearchResults = React.createClass({
    getInitialState: function () {
        return {searchResultsJSON: null, searchResults: null, className: 'search-results' };
    },
    componentWillReceiveProps: function (nextProps) {
        if (nextProps.searchResults) {
            let searchResults = nextProps.searchResults;
            let entries = searchResults.entries();

            let newSearchEntries = [];

            for (const v of entries) {
                console.log(v[1].get('name'));
                newSearchEntries.push(<SearchResult key={v[0]} name={v[1].get('name')} slug={v[1].get('slug')}/>);
            }

            this.setState({
                searchResults: newSearchEntries,
                className: 'search-results' + (newSearchEntries.length != 0) ? '' : ' --show'
            });
        }
    },
    render: function () {
        return <div className={this.state.className}>
            {this.state.searchResults}
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