import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import NotFound from './NotFound';
import Dashboard from './Dashboard';
import AccountsListContainer from './AccountsListContainer';
import AccountContainer from './AccountContainer';
import Header from './Header';

class Router extends PureComponent {
  render() {
    if (!this.props.loggedIn) {
      return (
        <BrowserRouter>
          <Switch>
            <Route render={props => <LoginPage {...props} loggedIn={this.props.loggedIn} login={this.props.login} />} />
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
              render={props => <Dashboard {...props} user={this.props.user} login={this.props.login} />}
            />
            <Route path="/login" render={props => <LoginPage loggedIn={props.loggedIn} login={this.props.login} />} />
            <Route
              exact
              path="/financial/accounts"
              render={props => <AccountsListContainer user={this.props.user} />}
            />
            <Route
              path="/financial/accounts/account/:id"
              render={({ match }) => <AccountContainer user={this.props.user} match={match} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
