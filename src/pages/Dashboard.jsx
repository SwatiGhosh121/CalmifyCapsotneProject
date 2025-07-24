import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
  const { isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  return (
    <div style={{ maxWidth: 600, margin: '3rem auto', padding: '2rem', background: 'var(--color-white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
      <h2>Welcome, {currentUser?.username}!</h2>
      <p style={{ color: '#6b7280' }}>This is your dashboard. Here you can see your account details and personal data.</p>
      <div style={{ marginTop: '2rem' }}>
        <strong>User ID:</strong> {currentUser?.id}
      </div>
    </div>
  );
};

export default Dashboard; 