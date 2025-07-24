import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: 'var(--color-light-gray)',
    padding: '3rem 5% 2rem',
    marginTop: 'auto',
    borderTop: '1px solid #e5e7eb',
  };

  const footerContent = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  };

  const footerSection = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const footerBottom = {
    maxWidth: '1200px',
    margin: '2rem auto 0',
    padding: '2rem 0 0',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  return (
    <footer style={footerStyles}>
      <div style={footerContent}>
        <div style={footerSection}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <Heart size={24} color="var(--color-primary)" />
            <h3 style={{ margin: 0, color: 'var(--color-text)' }}>Calmify</h3>
          </div>
          <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
            A gentle space for mental wellness, designed with empathy and respect for your privacy.
          </p>
        </div>

        <div style={footerSection}>
          <h4 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>Our Values</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={16} color="var(--color-secondary)" />
              <span style={{ color: '#6b7280' }}>Complete Privacy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Heart size={16} color="var(--color-secondary)" />
              <span style={{ color: '#6b7280' }}>Empathetic Design</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={16} color="var(--color-secondary)" />
              <span style={{ color: '#6b7280' }}>Community Support</span>
            </div>
          </div>
        </div>

        <div style={footerSection}>
          <h4 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>Resources</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="/features" style={{ color: '#6b7280', textDecoration: 'none' }}>Features & Tools</a>
            <a href="/resources" style={{ color: '#6b7280', textDecoration: 'none' }}>Mental Health Resources</a>
            <a href="/about" style={{ color: '#6b7280', textDecoration: 'none' }}>About Our Mission</a>
          </div>
        </div>

        <div style={footerSection}>
          <h4 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>Legal</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Accessibility</a>
          </div>
        </div>
      </div>

      <div style={footerBottom}>
        <p style={{ color: '#6b7280', margin: 0 }}>
          © {new Date().getFullYear()} Calmify. A space for you.
        </p>
        <p style={{ color: '#6b7280', margin: 0, fontSize: '0.9rem' }}>
          Your wellbeing matters. You are not alone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;