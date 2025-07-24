import React from 'react';

const Card = ({ children, style, hover = true }) => {
  const cardStyles = {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--box-shadow)',
    padding: '1.5rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'var(--transition)',
  };

  return (
    <div 
      style={{ ...cardStyles, ...style }}
      onMouseEnter={hover ? (e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--box-shadow-hover)';
      } : undefined}
      onMouseLeave={hover ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--box-shadow)';
      } : undefined}
    >
      {children}
    </div>
  );
};

export default Card;