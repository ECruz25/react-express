import React, { Component } from 'react';
import Router from './Router';
import Cookies from 'universal-cookie';
import '../App.css';

const cookies = new Cookies();

class App extends Component {
  state = {
    loggedIn: ''
  };

  login = user => {
    this.setState({ loggedIn: true });
    cookies.set('user', user);
    cookies.set('loggedIn', this.state.loggedIn);
  };

  componentDidMount() {
    this.setState({ loggedIn: cookies.get('loggedIn') });
  }

  render() {
    return <Router loggedIn={this.state.loggedIn} login={this.login} />;
  }
}

export default App;
