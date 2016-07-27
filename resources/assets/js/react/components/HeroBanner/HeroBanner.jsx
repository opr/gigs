import React from 'react';
import {render} from 'react-dom';
import Search from '../Search/Search';

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
                <Search notifySearchModified={this.notifySearchModified}/>
            </div>
        )
    }
});

module.exports = HeroBanner;