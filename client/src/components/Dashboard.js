import React, { Component } from 'react';
import AccountsContainer from './AccountsContainer';

class Dashboard extends Component {
  render() {
    return (
      <main className="dashboard">
        <section className="dashboard__accounts">
          <AccountsContainer user={this.props.user} />
        </section>
      </main>
    );
  }
}

export default Dashboard;
