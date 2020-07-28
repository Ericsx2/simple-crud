import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import Home from '../Home'
import UserCrud from '../UserCrud'

// import { Container } from './styles';

function Router(props) {
  return <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={UserCrud} />
      <Redirect from='*' to='/' />
  </Switch>;
}

export default Router;


