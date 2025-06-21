import React from 'react';
import './background.css';

const Background = ({ children }) => {
  return (
    <div className="background-container">
      <div className="smoke-effect">
        <div className="smoke-particle smoke-1"></div>
        <div className="smoke-particle smoke-2"></div>
        <div className="smoke-particle smoke-3"></div>
        <div className="smoke-particle smoke-4"></div>
        <div className="smoke-particle smoke-5"></div>
      </div>
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Background;

