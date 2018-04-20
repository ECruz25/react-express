import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import NotFound from './NotFound';
import Dashboard from './Dashboard';

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
              render={props => <LoginPage loggedIn={props.loggedIn} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
