import React from 'react';

const Button = ({ type, shadow, color, bg ,fontSize, title, onClick, width, height, borderRadius }) => {
  const buttonStyles = {
    width: width || '426px',
    height: height || '64px',
    borderRadius: borderRadius || '6px',
    textAlign: 'center',
    color: 'white',
    fontSize: fontSize || '16px',
    boxShadow: shadow ? '0px 4px 10px rgba(0, 0, 0, 0.08)' : 'none',
    backgroundColor: bg || '#2196f3', // Default color is blue (#2196f3)
    color: color || '#2196f3', // Default color is blue (#2196f3)

    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button
      type="button"
      style={buttonStyles}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
