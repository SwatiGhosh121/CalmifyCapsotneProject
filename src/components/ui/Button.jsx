import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'accent',
  style,
  type = 'button'
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      padding: '12px 24px',
      fontSize: '16px',
      fontFamily: 'var(--font-family-base)',
      fontWeight: '500',
      border: 'none',
      borderRadius: 'var(--border-radius)',
      cursor: 'pointer',
      transition: 'var(--transition)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    };

    const variantStyles = {
      primary: {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
      },
      secondary: {
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-text)',
      },
      accent: {
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-text)',
      },
    };

    return { ...baseStyles, ...variantStyles[variant] };
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      style={{ ...getButtonStyles(), ...style }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--box-shadow-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--box-shadow)';
      }}
    >
      {children}
    </button>
  );
};

export default Button;