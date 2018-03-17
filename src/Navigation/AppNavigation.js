import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Routes from './Routes'

const AppNavigation = () => (
  <BrowserRouter>
    <Switch>
      {Routes.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
  </BrowserRouter>

);

export default AppNavigation;