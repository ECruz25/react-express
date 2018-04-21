import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <NavLink
      to="/"
      className="navbar-brand"
      activeClassName="active"
      exact={true}
    >
      Home
    </NavLink>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/financial/accounts"
            className="nav-link"
            activeClassName="active"
          >
            Money Management
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
