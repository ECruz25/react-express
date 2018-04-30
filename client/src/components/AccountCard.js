import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAccountCard = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  font-weight: 600;
  margin-top: 1vh;
  margin-bottom: 1vh;
  padding: 5vh;
  padding-left: 5vw;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.03);
  .account-card-balance {
    justify-self: center;
  }
  .account-card-options {
    /* justify-self: center; */
    a {
      padding: 8.5px 18px;
      box-sizing: content-box;
    }
    button {
      padding: 8.5px 18px;
      box-sizing: content-box;
    }
  }
  .account-card-button {
    text-decoration: none;
    color: white;
    background-color: red;
    padding: 8px 18px;
    font-weight: 600;
    border: none;
    margin: auto;
    margin-left: 4px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    .account-card-options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      margin-top: 10px;
    }
  }
`;

class AccountCard extends PureComponent {
  render() {
    return (
      <StyledAccountCard>
        <p className="account-card-name">{this.props.accountName}</p>
        <h3 className="account-card-balance">{this.props.balance}</h3>
        <div className="account-card-options">
          <Link className="account-card-button" to={`/financial/accounts/account/${this.props.id}`}>
            View
          </Link>
          <button className="account-card-button" onClick={() => this.props.deleteAccount(this.props.index)}>
            Remove
          </button>
        </div>
      </StyledAccountCard>
    );
  }
}

export default AccountCard;
