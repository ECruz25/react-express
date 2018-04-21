import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="header">
    <NavLink
      to="/"
      className="header__logo header__item"
      activeClassName=" header__item--active"
      exact={true}
    >
      Dashboard
    </NavLink>
    <div className="header__sub-header">
      <NavLink
        to="/financial/accounts"
        className=" header__sub-header__item"
        activeClassName="header__sub-header__item--active"
      >
        Money Management
      </NavLink>
      <NavLink
        to="/login"
        className="header__sub-header__item"
        activeClassName="header__sub-header__item--active"
      >
        Login
      </NavLink>
      <NavLink
        to="/todos"
        className=" header__sub-header__item"
        activeClassName="header__sub-header__item--active"
      >
        To-Do's
      </NavLink>
    </div>
  </nav>
);

export default Header;
