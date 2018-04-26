import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Router from './Router';
import '../App.css';

const cookies = new Cookies();

class App extends Component {
  state = {
    loggedIn: '',
    user: '',
  };

  componentWillMount() {
    this.setState({
      loggedIn: cookies.get('loggedIn'),
      user: cookies.get('user'),
    });
  }
  login = user => {
    this.setState({ loggedIn: true, user });
    cookies.set('user', user);
    cookies.set('loggedIn', this.state.loggedIn);
  };

  logout = () => {
    this.setState({ loggedIn: false, user: '' });
    cookies.remove('user');
    cookies.remove('loggedIn');
  };

  render() {
    return <Router loggedIn={this.state.loggedIn} login={this.login} user={this.state.user} logout={this.logout} />;
  }
}

export default App;
