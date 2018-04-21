import React, { Component } from 'react';
import Accounts from './Accounts';

class Dashboard extends Component {
  render() {
    return (
      <main className="dashboard">
        <section classname="dashboard__accounts">
          <Accounts />
        </section>
      </main>
    );
  }
}

export default Dashboard;
