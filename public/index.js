import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import AboutUs from './views/AboutUs';
import Contact from './views/Contact';
import HomePage from './views/HomePage';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={HomePage}></Route>
  	<Route path="/contact" component={Contact}></Route>
  	<Route path="/about" component={AboutUs}></Route>
  </Router>,
app);