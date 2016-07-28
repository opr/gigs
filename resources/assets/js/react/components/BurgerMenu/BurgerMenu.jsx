import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

var BurgerMenu =  React.createClass({
    getInitialState: function() {
        return {
            className: 'header__burger-menu'
        }
    },
    render: function() {
        return (
            <div className={this.state.className} aria-label="navigation menu">&#9776;</div>
        )
    }
});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

let BurgerMenuContainer = connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
module.exports = BurgerMenuContainer;
