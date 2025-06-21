import React from 'react';
import './button.css';

const CustomButton = ({ 
  children, 
  onClick, 
  href, 
  target = "_blank", 
  variant = "primary", 
  icon,
  className = "" 
}) => {
  const buttonContent = (
    <>
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </>
  );

  const buttonClass = `custom-button ${variant} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target={target}
        className={buttonClass}
        rel="noopener noreferrer"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={buttonClass}
    >
      {buttonContent}
    </button>
  );
};

export default CustomButton;

