import React from 'react';
import {render} from 'react-dom';
import autoComplete from '../../../helpers/Search/Search';
import {connect} from 'react-redux';

var Search =  React.createClass({
    getInitialState: () => {
        return {
            lastKeyPress: new Date().getTime(),
            inputContents: '',
            searchTimeout: null
        };
    },
    handleChange: function(event) {
        this.props.notifySearchModified(event.target.value);
        this.setState({
            lastKeyPress: new Date().getTime(),
            inputContents: event.target.value
        });
        let autoCompleteValues = autoComplete(event.target.value, event.target.value);
        autoCompleteValues.then((result) => {
            this.props.setSearchResults(result);
        });
    },
    render: function () {
        return <form className="search">
            <label htmlFor="search__input" className="hidden-label">Search</label>
            <div className="search__input-container">
                <input type="text" name="search" className="input search__input --text" id="search__input" value={this.state.inputContents} autoComplete="off" placeholder="Search for an artist..." onChange={this.handleChange} />
                <button type="submit" name="submit" className="input search__submit"></button>
            </div>
            <div className="debug">{this.state.lastKeyPress}</div>
        </form>;
    }
});

module.exports = Search;