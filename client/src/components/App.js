import React, { Component } from 'react';
import Router from './Router';
import Cookies from 'universal-cookie';
import '../style.css';

const cookies = new Cookies();

class App extends Component {
  state = {
    loggedIn: '',
    user: ''
  };

  login = user => {
    this.setState({ loggedIn: true, user });
    cookies.set('user', user);
    cookies.set('loggedIn', this.state.loggedIn);
  };

  componentDidMount() {
    this.setState({
      loggedIn: cookies.get('loggedIn'),
      user: cookies.get('user')
    });
  }

  render() {
    return (
      <Router
        loggedIn={this.state.loggedIn}
        login={this.login}
        user={this.state.user}
      />
    );
  }
}

export default App;
