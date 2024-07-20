import React from 'react';
import '../App.css';
import Navbar from './Navbar';


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Spendify</div>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;