import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { getMoodLogsForUser, getJournalEntriesForUser } from '../hooks/useUserData';
import Card from '../components/ui/Card';
import { BarChart, BookOpen, Smile } from 'lucide-react';

const Dashboard = () => {
  const { isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();
  const [moodLogs, setMoodLogs] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    } else if (currentUser) {
      setMoodLogs(getMoodLogsForUser(currentUser.id));
      setJournalEntries(getJournalEntriesForUser(currentUser.id));
    }
  }, [isLoggedIn, navigate, currentUser]);

  if (!isLoggedIn || !currentUser) return null;

  const totalMoodsLogged = moodLogs.length;
  const totalJournalEntries = journalEntries.length;

  const getMostFrequentMood = () => {
    if (totalMoodsLogged === 0) return "N/A";
    const moodCounts = moodLogs.reduce((acc, log) => {
      acc[log.mood] = (acc[log.mood] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(moodCounts).reduce((a, b) => moodCounts[a] > moodCounts[b] ? a : b);
  };

  const mostFrequentMood = getMostFrequentMood();

  return (
    <div className="container">
      {/* Welcome Header */}
      <header style={{ margin: '2rem 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>Welcome back, {currentUser.username}!</h1>
        <p style={{ color: '#6b7280', fontSize: '1.2rem' }}>Here's a summary of your journey so far.</p>
      </header>

      {/* Quick Stats Section */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <Card>
            <Smile size={32} color="var(--color-primary)" />
            <h3 style={{ margin: '1rem 0 0.5rem' }}>Total Moods Logged</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{totalMoodsLogged}</p>
          </Card>
          <Card>
            <BookOpen size={32} color="var(--color-secondary)" />
            <h3 style={{ margin: '1rem 0 0.5rem' }}>Journal Entries Made</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{totalJournalEntries}</p>
          </Card>
          <Card>
            <BarChart size={32} color="var(--color-accent)" />
            <h3 style={{ margin: '1rem 0 0.5rem' }}>Most Frequent Mood</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', textTransform: 'capitalize' }}>{mostFrequentMood}</p>
          </Card>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Recent Mood Logs</h2>
            <Card>
              {moodLogs.slice(0, 3).map(log => (
                <div key={log.id} style={{ borderBottom: '1px solid #eee', padding: '1rem 0' }}>
                  <p><strong>{log.mood}</strong> - {new Date(log.date).toLocaleDateString()}</p>
                  {log.note && <p style={{ color: '#6b7280' }}>{log.note}</p>}
                </div>
              ))}
              {moodLogs.length === 0 && <p>No moods logged yet.</p>}
            </Card>
          </div>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Recent Journal Entries</h2>
            <Card>
              {journalEntries.slice(0, 3).map(entry => (
                <div key={entry.id} style={{ borderBottom: '1px solid #eee', padding: '1rem 0' }}>
                  <p><strong>{entry.title}</strong> - {new Date(entry.date).toLocaleDateString()}</p>
                </div>
              ))}
              {journalEntries.length === 0 && <p>No journal entries yet.</p>}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard; 