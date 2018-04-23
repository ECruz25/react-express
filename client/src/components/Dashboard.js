import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AccountsListContainer from './AccountsListContainer';

const StyledDashboard = styled.main`
  margin: 0 2vw;
`;

class Dashboard extends PureComponent {
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
