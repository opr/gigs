import React from 'react';
import {render} from 'react-dom';
import Search from './components/Search/Search';

render(<Search />, document.getElementById('hero-banner__react-anchor'));
module.hot.accept();