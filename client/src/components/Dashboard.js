import React, { Component } from 'react';
import Accounts from './Accounts';

class Dashboard extends Component {
  render() {
    return (
      <main className="dashboard">
        <section className="dashboard__accounts">
          <Accounts />
        </section>
      </main>
    );
  }
}

export default Dashboard;
