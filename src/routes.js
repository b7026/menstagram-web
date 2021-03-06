import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './history';
import { store } from './store/index';
import { Top } from './containers/top';
import { Register } from "./containers/register";
import { Login } from "./containers/login";

export const Routes = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={'/'} component={ Top } />
          <Route exact path={'/register'} component={ Register } />
          <Route exact path={'/login'} component={ Login } />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
