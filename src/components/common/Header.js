import React from 'react';
import './Header.css';
import LogInForm from '../LogInForm';

function Header() {
  return (
    <header className="Header">
      <nav className="Nav">
        <a href="/">Home</a>
        <a href="/">FAQ</a>
        <a href="/">Other Link</a>
      </nav>
      <LogInForm />
    </header>
  );
}

export default Header;
