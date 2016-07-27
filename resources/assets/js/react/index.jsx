import React from 'react';
import {render} from 'react-dom';
import HeroBanner from './components/HeroBanner/HeroBanner';
import SearchResults from './components/SearchResults/SearchResults';
import makeStore from './store';

export const store = makeStore();

render(<HeroBanner />, document.getElementById('hero-banner__react-anchor'));
render(<SearchResults />, document.getElementById('search-results__react-anchor'));
module.hot.accept();