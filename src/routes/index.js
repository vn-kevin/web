import React, { PropTypes } from 'react';
import { Redirect,Router, Route, IndexRoute, Link } from 'react-router';
import 'antd';

import Login from '../view/Login/login';
import Home from '../view/Home/home';
import Cer from '../view/Certificate/cer';
//404
import NotFound from '../view/404/NotFound';


const Routes = ({ history }) =>
  <Router history={history}>
  	<Redirect from="/" to="/login" />
  	<Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/cer" component={Cer}/>
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
