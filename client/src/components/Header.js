import React from 'react';
// import './App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Spendify</div>
        <nav>
          <ul className="header-list">
            <li><a href="#investments">Investments</a></li>
            <li><a href="#bills">Bills</a></li>
            <li><a href="#loans">Loans</a></li>
            <li><a href="#discounts">Discounts</a></li>
            <li><a href="#specialoffers">Special Offers</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;