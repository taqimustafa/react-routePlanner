import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import Login from './views/Login';
import Register from './views/Register';
import HomePage from './views/HomePage';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={HomePage}></Route>
  	<Route path="register" component={Register}></Route>
  	<Route path="login" component={Login}></Route>
  </Router>,
app);