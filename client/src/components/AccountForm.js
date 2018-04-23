import React, { Component, createRef } from 'react';
import styled from 'styled-components';

const StyledAccountForm = styled.div`
  .account-form {
    display: grid;
    grid-template-columns: 50% 25% 25%;
    justify-items: center;
    height: 12vh;
    width: 100%;
    &-input {
      width: 85%;
      height: 90%;
      padding-left: 10%;
    }
    &-button {
      background-color: red;
      border: none;
      height: 55%;
      width: 40%;
      font-size: 30px;
      color: white;
      font-weight: 600;
    }
  }
`;

class AccountForm extends Component {
  onSubmit = async event => {
    event.preventDefault();
    const account = {
      accountName: this.accountNameRef.current.value,
      balance: this.balanceRef.current.value,
    };
    this.props.addAccount(account);
    event.currentTarget.reset();
  };

  accountNameRef = createRef();
  balanceRef = createRef();

  render() {
    return (
      <StyledAccountForm>
        <form className="account-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="accountName"
            className="account-form-input"
            placeholder="Account Name"
            ref={this.accountNameRef}
          />
          <input
            type="number"
            name="balance"
            className="account-form-input"
            placeholder="balance"
            ref={this.balanceRef}
          />
          <button type="submit" className="account-form-button">
            Save
          </button>
        </form>
      </StyledAccountForm>
    );
  }
}

export default AccountForm;
