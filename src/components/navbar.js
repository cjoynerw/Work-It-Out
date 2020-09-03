import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Work It Out Planner</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <LoginButton />
          <LogoutButton />
        </ul>
        </div>
      </nav>
    );
  }
}