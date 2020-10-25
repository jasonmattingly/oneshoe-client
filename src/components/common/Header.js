import React from 'react';
import { headerStyle } from './Header.css';

function Header() {
  return (
    <header className="Header">
      <nav className="Nav">
        <a href="/">Home</a>
        <a href="/">FAQ</a>
        <a href="/">Other Link</a>
      </nav>
      <div className="LogIn">
        <input type="text" placeholder="Email Address"/>
        <input type="text" placeholder="Password"/>
        <input type="submit" />
      </div>
    </header>
  );
}

export default Header;


{/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}