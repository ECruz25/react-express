import React, { Component } from 'react';
import AccountsListContainer from './AccountsListContainer';

class Dashboard extends Component {
  render() {
    return (
      <main className="dashboard">
        <section className="dashboard__accounts">
          <AccountsListContainer user={this.props.user} />
        </section>
      </main>
    );
  }
}

export default Dashboard;
