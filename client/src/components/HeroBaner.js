import React from 'react';
import '../App.css';

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero-banner-container">
        <div className="desc">
          <h1>Welcome to Spendify</h1>
          <p>Manage your finances effectively with Spendify.</p>
          {/* <button>Get Started</button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;