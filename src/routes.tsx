import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './containers/home';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
