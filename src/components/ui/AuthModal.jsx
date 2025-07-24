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
  minWidth: '400px',
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
  padding: '0',
  lineHeight: '1',
};

const AuthModal = ({ onClose }) => {
  const { login, signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (isLogin) {
        await login(username, password);
      } else {
        await signup(username, password);
      }
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={modalStyles} onClick={onClose}>
      <div style={{ ...boxStyles, position: 'relative' }} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtnStyles} className="btn-secondary" onClick={onClose} aria-label="Close">×</button>
        <h2 style={{ marginBottom: '1.5rem' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        <p style={{ marginTop: '1.5rem' }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="btn btn-secondary">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal; 