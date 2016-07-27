import React from 'react';
import {render} from 'react-dom';
import Search from '../Search/Search';
import {connect} from 'react-redux';
import {setSearchResults} from '../../actions';

var HeroBanner =  React.createClass({
    getInitialState: function() {
        return {
            className: 'hero-banner'
        }
    },
    notifySearchModified: function ( value ) {
        let className = 'hero-banner';
        if(value != '') {
            className = 'hero-banner --small';
        }
        this.setState({
            className: className
        });
    },
    render: function() {
        return (
            <div className={this.state.className}>
                <div style={{color: 'white'}}>{this.props.searchResults}</div>
                <Search setSearchResults={this.props.setSearchResults} notifySearchModified={this.notifySearchModified}/>
            </div>
        )
    }
});

    function mapStateToProps(state) {
        return {searchResults: state};
    };
    function mapDispatchToProps(dispatch) {
        return {
            setSearchResults: (results) => {
                console.log('about to dispatch');
                dispatch(setSearchResults(results));
            }
        }
    };

let HeroBannerContainer = connect(mapStateToProps, mapDispatchToProps)(HeroBanner);
module.exports = HeroBannerContainer;
