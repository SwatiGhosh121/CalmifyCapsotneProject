import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useAuth } from '../../AuthContext';
import AuthModal from '../ui/AuthModal';

const Navbar = () => {
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    backgroundColor: 'var(--color-white)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const logoStyles = {
    fontWeight: '700',
    fontSize: '1.5rem',
    color: 'var(--color-text)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const navLinksContainer = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  };

  const authButtonsContainer = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  };

  const { isLoggedIn, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  return (
    <nav style={navStyles}>
      <NavLink to="/" style={logoStyles}>
        <Heart size={24} color="var(--color-primary)" />
        Calmify
      </NavLink>
      
      <div style={navLinksContainer}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            fontWeight: '500',
            color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'var(--transition)',
            backgroundColor: isActive ? 'rgba(174, 198, 207, 0.1)' : 'transparent',
          })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          style={({ isActive }) => ({
            fontWeight: '500',
            color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'var(--transition)',
            backgroundColor: isActive ? 'rgba(174, 198, 207, 0.1)' : 'transparent',
          })}
        >
          About
        </NavLink>
        <NavLink 
          to="/features" 
          style={({ isActive }) => ({
            fontWeight: '500',
            color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'var(--transition)',
            backgroundColor: isActive ? 'rgba(174, 198, 207, 0.1)' : 'transparent',
          })}
        >
          Features & Tools
        </NavLink>
        <NavLink 
          to="/resources" 
          style={({ isActive }) => ({
            fontWeight: '500',
            color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'var(--transition)',
            backgroundColor: isActive ? 'rgba(174, 198, 207, 0.1)' : 'transparent',
          })}
        >
          Resources
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              fontWeight: '500',
              color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'var(--transition)',
              backgroundColor: isActive ? 'rgba(174, 198, 207, 0.1)' : 'transparent',
            })}
          >
            Dashboard
          </NavLink>
        )}
      </div>

      <div style={authButtonsContainer}>
        {isLoggedIn ? (
          <button style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '8px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'var(--transition)',
          }} onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <button style={{
              background: 'none',
              border: 'none',
              fontWeight: '500',
              color: 'var(--color-text)',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'var(--transition)',
            }} onClick={() => setShowModal(true)}>
              Login
            </button>
            <button style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-white)',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'var(--transition)',
            }} onClick={() => setShowModal(true)}>
              Sign Up
            </button>
          </>
        )}
      </div>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;