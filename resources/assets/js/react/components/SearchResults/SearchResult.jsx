import React from 'react';
import {render} from 'react-dom';

var SearchResult = React.createClass({
    render: function () {
        return <a href={'/artist/' + this.props.slug} className="search-results__result">
            <div className="search-results__result__title">{this.props.name}</div>
        </a>;
    }
});

module.exports = SearchResult;