import React from 'react';
import {render} from 'react-dom';
import HeroBannerContainer from './components/HeroBanner/HeroBanner';
import SearchResultsContainer from './components/SearchResults/SearchResults';
import {Provider} from 'react-redux';
import {initState} from './actions';

import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
store.dispatch(initState());

render(
    <Provider store={store}>
        <HeroBannerContainer />
    </Provider>, document.getElementById('hero-banner__react-anchor'));

render(
    <Provider store={store}>
        <SearchResultsContainer />
    </Provider>, document.getElementById('search-results__react-anchor'));

module.hot.accept();