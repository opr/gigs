import React from 'react';
import {render} from 'react-dom';
import HeroBannerContainer from './components/HeroBanner/HeroBanner';
import SearchResultsContainer from './components/SearchResults/SearchResults';
import BurgerMenuContainer from './components/BurgerMenu/BurgerMenu';
import {Provider} from 'react-redux';
import {initState} from './actions';

import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
store.dispatch(initState());

let anchors = {
    heroBanner: document.getElementById('hero-banner__react-anchor'),
    searchResults: document.getElementById('search-results__react-anchor'),
    burgerMenu: document.getElementById('burger-menu__react-anchor')
};

if( anchors.heroBanner ) {
    render(
        <Provider store={store}>
            <HeroBannerContainer />
        </Provider>, anchors.heroBanner);
}

if( anchors.searchResults ) {
    render(
        <Provider store={store}>
            <SearchResultsContainer />
        </Provider>, anchors.searchResults);
}
if( anchors.burgerMenu ) {
    render(
        <Provider store={store}>
            <BurgerMenuContainer />
        </Provider>, anchors.burgerMenu);
}

module.hot.accept();