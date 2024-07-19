import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Track Expenses</h3>
            <p>Keep track of all your expenses in one place.</p>
          </div>
          <div className="feature">
            <h3>Set Budgets</h3>
            <p>Set and manage your budgets easily.</p>
          </div>
          <div className="feature">
            <h3>Investment Insights</h3>
            <p>Get insights into your investments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
