import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  style,
  type = 'button',
  className = ''
}) => {
  const variantClassMap = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-primary'
  };

  const buttonClassName = `btn ${variantClassMap[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};

export default Button;