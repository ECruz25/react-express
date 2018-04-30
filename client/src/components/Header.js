import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.nav`
  padding: 3vh 3vw;
  font-size: 18px;
  display: grid;
  grid-template-columns: 34% 66%;
  justify-items: center;
  border-bottom: 12px solid gray;
  .hidden {
    display: none;
  }
  .header-logo {
    color: white;
    background-color: red;
    padding: 5px 9px;
    font-size: 25px;
    justify-self: start;
    font-weight: 600;
    text-transform: uppercase;
  }
  .header-item {
    text-decoration: none;
    border-color: black;
  }
  .header-sub-header {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    font-weight: 600;
    font-size: 25px;
    text-transform: uppercase;
    &-item {
      text-decoration: none;
      color: black;
      position: relative;
      z-index: 1;
      transition: border 3s ease;
      transform-origin: center;
      transform: scale3d(1, 1, 1);
      &:hover {
        &:after {
          content: '';
          position: absolute;
          left: 25%;
          bottom: -10px;
          height: 2px;
          width: 50%;
          border-bottom: 4px solid red;
        }
      }
      &--active {
        &::after {
          content: '';
          position: absolute;
          left: 10%;
          bottom: -10px;
          height: 2px;
          width: 80%;
          border-bottom: 4px solid red;
        }
        &:hover {
          color: black;
          &::after {
            content: '';
            position: absolute;
            left: 10%;
            bottom: -10px;
            height: 2px;
            width: 80%;
            border-bottom: 4px solid red;
          }
        }
      }
    }
  }
  .header-sub-header-icons {
    display: none;
  }
  @media (max-width: 600px) {
    /* display: none; */
    font-size: 16px;
    padding: 8px;
    display: block;
    .header-logo {
      display: none;
    }
    .header-sub-header {
      display: none;
    }
    .header-sub-header-icons {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }
    .icon {
      height: 32px;
      width: 32px;
    }
  }
`;

class Header extends React.PureComponent {
  render() {
    return (
      <StyledHeader>
        <NavLink to="/" className="header-logo header-item" activeClassName="header-item--active" exact>
          Dashboard
        </NavLink>
        <div className="header-sub-header">
          <NavLink
            to="/financial/accounts"
            className=" header-sub-header-item"
            activeClassName="header-sub-header-item--active"
          >
            Money Management
          </NavLink>
          <NavLink to="/todos" className=" header-sub-header-item" activeClassName="header-sub-header-item--active">
            To-Do's
          </NavLink>
          {!this.props.loggedIn ? (
            <NavLink to="/login" className="header-sub-header-item" activeClassName="header-sub-header-item--active">
              Login
            </NavLink>
          ) : (
            <NavLink to="/logout" className="header-sub-header-item" activeClassName="header-sub-header-item--active">
              Logout
            </NavLink>
          )}
        </div>
        <div className="header-sub-header-icons">
          <NavLink
            to="/financial/accounts"
            className=" header-sub-header-item-icon"
            activeClassName="header-sub-header-item-icon--active"
          >
            <img src="/money.png" alt="icon" className="icon" />
          </NavLink>
          <NavLink
            to="/todos"
            className=" header-sub-header-item-icon"
            activeClassName="header-sub-header-item-icon--active"
          >
            <img src="/todo.png" alt="icon" className="icon" />
          </NavLink>
          {!this.props.loggedIn ? (
            <NavLink
              to="/login"
              className="header-sub-header-item-icon"
              activeClassName="header-sub-header-item-icon--active"
            >
              Login
            </NavLink>
          ) : (
            <NavLink
              to="/logout"
              className="header-sub-header-item-icon"
              activeClassName="header-sub-header-item-icon--active"
            >
              <img src="/logout.png" alt="icon" className="icon" />
            </NavLink>
          )}
        </div>
      </StyledHeader>
    );
  }
}
export default Header;
