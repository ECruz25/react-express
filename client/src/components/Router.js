import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import NotFound from './NotFound';
import Dashboard from './Dashboard';
import Accounts from './Accounts';
import Account from './Account';
import Header from './Header';

class Router extends Component {
  render() {
    if (!this.props.loggedIn) {
      return (
        <BrowserRouter>
          <Switch>
            <Route
              render={props => (
                <LoginPage
                  {...props}
                  loggedIn={this.props.loggedIn}
                  login={this.props.login}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={Dashboard}
              login={this.props.login}
            />
            <Route
              path="/login"
              render={props => (
                <LoginPage loggedIn={props.loggedIn} login={this.props.login} />
              )}
            />
            <Route
              exact
              path="/financial/accounts"
              render={props => <Accounts user={this.props.user} />}
            />
            <Route
              path="/financial/accounts/account/:id"
              render={props => <Account user={this.props.user} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
