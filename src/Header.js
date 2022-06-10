import React from 'react';
import Logo from './react-logo.png';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="logo" src={Logo} alt="Logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
