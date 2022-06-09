import React from 'react'

export default function Header() {
  return (
      <header>
          <nav className="nav">
        <img className ="logo" src={require("./react-logo.png")} alt="Logo"/>
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}
