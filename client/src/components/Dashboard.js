import React, { Component } from 'react';
import Accounts from './Accounts';

class Dashboard extends Component {
  render() {
    return (
      <main>
        <section>
          <Accounts />
        </section>
      </main>
    );
  }
}

export default Dashboard;
