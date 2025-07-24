import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

const boxStyles = {
  background: 'var(--color-white)',
  borderRadius: 'var(--border-radius)',
  boxShadow: 'var(--box-shadow)',
  padding: '2rem',
  minWidth: '320px',
  maxWidth: '90vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const closeBtnStyles = {
  position: 'absolute',
  top: 16,
  right: 24,
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: 'var(--color-text)',
};

const AuthModal = ({ onClose }) => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login();
      setLoading(false);
      onClose();
    }, 500); // Simulate async login
  };

  return (
    <div style={modalStyles}>
      <div style={{ ...boxStyles, position: 'relative' }}>
        <button style={closeBtnStyles} onClick={onClose} aria-label="Close">×</button>
        <h2 style={{ marginBottom: '1.5rem' }}>Login</h2>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <input
            type="text"
            placeholder="Username"
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '1rem',
              border: '2px solid #e5e7eb',
              borderRadius: 'var(--border-radius)',
              fontFamily: 'var(--font-family-base)',
              fontSize: '16px',
              transition: 'var(--transition)',
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '1.5rem',
              border: '2px solid #e5e7eb',
              borderRadius: 'var(--border-radius)',
              fontFamily: 'var(--font-family-base)',
              fontSize: '16px',
              transition: 'var(--transition)',
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: 'var(--border-radius)',
              fontWeight: '500',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'var(--transition)',
            }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal; 