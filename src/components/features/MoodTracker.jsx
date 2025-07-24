import React, { useState } from 'react';
import { format } from 'date-fns';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useAuth } from '../../AuthContext';
import { getMoodLogsForUser, addMoodLogForUser } from '../../hooks/useUserData';

const moodOptions = [
  { emoji: '😊', label: 'Happy', value: 'happy' },
  { emoji: '😌', label: 'Calm', value: 'calm' },
  { emoji: '😐', label: 'Neutral', value: 'neutral' },
  { emoji: '😔', label: 'Sad', value: 'sad' },
  { emoji: '😰', label: 'Anxious', value: 'anxious' },
  { emoji: '😤', label: 'Frustrated', value: 'frustrated' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [note, setNote] = useState('');
  const { currentUser } = useAuth();
  const [logs, setLogs] = useState(currentUser ? getMoodLogsForUser(currentUser.id) : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMood && currentUser) {
      const newLog = {
        id: Date.now(),
        mood: selectedMood,
        note,
        date: new Date().toISOString(),
      };
      addMoodLogForUser(currentUser.id, newLog);
      setLogs(getMoodLogsForUser(currentUser.id));
      setSelectedMood('');
      setNote('');
      alert('Mood logged successfully! 🌟');
    }
  };

  return (
    <Card>
      <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>How are you feeling today?</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          {moodOptions.map((mood) => (
            <button
              key={mood.value}
              type="button"
              onClick={() => setSelectedMood(mood.value)}
              style={{
                padding: '1rem',
                border: selectedMood === mood.value ? '2px solid var(--color-primary)' : '2px solid #e5e7eb',
                borderRadius: 'var(--border-radius)',
                backgroundColor: selectedMood === mood.value ? 'rgba(174, 198, 207, 0.1)' : 'transparent',
                cursor: 'pointer',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ fontSize: '2rem' }}>{mood.emoji}</span>
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{mood.label}</span>
            </button>
          ))}
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: '500',
            color: 'var(--color-text)'
          }}>
            What's on your mind? (optional)
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Share any thoughts or notes about how you're feeling..."
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: 'var(--border-radius)',
              fontFamily: 'var(--font-family-base)',
              fontSize: '16px',
              resize: 'vertical',
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
        <Button type="submit" variant="primary" style={{ width: '100%' }}>
          Log My Mood
        </Button>
      </form>
      {currentUser && logs.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>Your Mood Logs</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {logs.map(log => (
              <li key={log.id} style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
                <strong>{format(new Date(log.date), 'MMM dd, yyyy HH:mm')}</strong>: {log.mood} {log.note && `- ${log.note}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default MoodTracker;