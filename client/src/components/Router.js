import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import NotFound from './NotFound';
import Dashboard from './Dashboard';
import AccountsListContainer from './AccountsListContainer';
import AccountContainer from './AccountContainer';
import Header from './Header';
import Logout from './Logout';

class Router extends PureComponent {
  render() {
    if (!this.props.loggedIn) {
      return (
        <BrowserRouter>
          <Switch>
            <Route
              render={props => (
                <LoginPage loggedIn={props.loggedIn} login={this.props.login} authentication="register" />
              )}
            />
          </Switch>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <div>
          <Header loggedIn={this.props.loggedIn} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Dashboard {...props} user={this.props.user} login={this.props.login} />}
            />
            <Route
              path="/login"
              render={props => <LoginPage loggedIn={props.loggedIn} login={this.props.login} authentication="login" />}
            />
            <Route
              exact
              path="/financial/accounts"
              render={props => <AccountsListContainer user={this.props.user} />}
            />
            <Route
              path="/financial/accounts/account/:id"
              render={({ match }) => <AccountContainer user={this.props.user} match={match} />}
            />
            <Route
              path="/signup"
              render={props => (
                <LoginPage loggedIn={props.loggedIn} login={this.props.login} authentication="register" />
              )}
            />
            <Route path="/logout" render={props => <Logout {...this.props} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
