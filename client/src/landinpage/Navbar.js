import React from 'react'

function Navbar() {
  return (
    <div>
         <nav>
          <ul className="header-list">
            <li><a href="#investments">Investments</a></li>
            <li><a href="#bills">Bills</a></li>
            <li><a href="#loans">Loans</a></li>
            <li><a href="#discounts">Discounts</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar