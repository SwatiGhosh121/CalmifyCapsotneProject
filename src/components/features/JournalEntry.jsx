import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useAuth } from '../../AuthContext';
import { getJournalEntriesForUser, addJournalEntryForUser } from '../../hooks/useUserData';

const JournalEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { currentUser } = useAuth();
  const [entries, setEntries] = useState(currentUser ? getJournalEntriesForUser(currentUser.id) : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim() && currentUser) {
      const newEntry = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        date: new Date().toISOString(),
      };
      addJournalEntryForUser(currentUser.id, newEntry);
      setEntries(getJournalEntriesForUser(currentUser.id));
      setTitle('');
      setContent('');
      alert('Journal entry saved! 📝');
    }
  };

  return (
    <Card>
      <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Write in Your Journal</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: '500',
            color: 'var(--color-text)'
          }}>
            Entry Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What would you like to call this entry?"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: 'var(--border-radius)',
              fontFamily: 'var(--font-family-base)',
              fontSize: '16px',
              transition: 'var(--transition)',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-primary)';
              e.target.style.outline = 'none';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
            }}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: '500',
            color: 'var(--color-text)'
          }}>
            Your Thoughts
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Express yourself freely... This is your safe space."
            style={{
              width: '100%',
              minHeight: '200px',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: 'var(--border-radius)',
              fontFamily: 'var(--font-family-base)',
              fontSize: '16px',
              resize: 'vertical',
              transition: 'var(--transition)',
              lineHeight: '1.6',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-primary)';
              e.target.style.outline = 'none';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
            }}
          />
        </div>
        <Button type="submit" variant="secondary" className="btn btn-primary" style={{ width: '100%' }}>
          Save Entry
        </Button>
      </form>
      {currentUser && entries.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>Your Journal Entries</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {entries.map(entry => (
              <li key={entry.id} style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
                <strong>{entry.title}</strong> ({new Date(entry.date).toLocaleString()}): {entry.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default JournalEntry;