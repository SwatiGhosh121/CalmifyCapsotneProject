import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import Card from '../ui/Card';
import { useAuth } from '../../AuthContext';
import { getMoodLogsForUser } from '../../hooks/useUserData';

const moodValues = {
  happy: 5,
  calm: 4,
  neutral: 3,
  sad: 2,
  anxious: 1,
  frustrated: 1,
};

const ProgressChart = () => {
  const { currentUser } = useAuth();
  const logs = currentUser ? getMoodLogsForUser(currentUser.id) : [];

  // Process mood data for the chart
  const processChartData = () => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = subDays(new Date(), 29 - i);
      const dateStr = format(date, 'yyyy-MM-dd');
      // Find moods for this date
      const dayMoods = logs.filter(mood => 
        format(parseISO(mood.date), 'yyyy-MM-dd') === dateStr
      );
      // Calculate average mood for the day
      const avgMood = dayMoods.length > 0 
        ? dayMoods.reduce((sum, mood) => sum + moodValues[mood.mood], 0) / dayMoods.length
        : null;
      return {
        date: dateStr,
        displayDate: format(date, 'MMM dd'),
        mood: avgMood,
        count: dayMoods.length,
      };
    });
    return last30Days;
  };

  const chartData = processChartData();
  const hasData = chartData.some(d => d.mood !== null);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          backgroundColor: 'var(--color-white)',
          padding: '12px',
          border: '1px solid #e5e7eb',
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--box-shadow)',
        }}>
          <p style={{ margin: '0 0 4px 0', fontWeight: '500' }}>{data.displayDate}</p>
          <p style={{ margin: '0', color: 'var(--color-primary)' }}>
            Mood Score: {data.mood ? data.mood.toFixed(1) : 'No data'}
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#6b7280' }}>
            {data.count} {data.count === 1 ? 'entry' : 'entries'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Your Mood Journey</h3>
      {!hasData ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem 1rem',
          color: '#6b7280'
        }}>
          <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</p>
          <p style={{ marginBottom: '0.5rem' }}>Start tracking your moods to see your progress!</p>
          <p style={{ fontSize: '0.9rem' }}>Your journey visualization will appear here once you begin logging.</p>
        </div>
      ) : (
        <div style={{ height: '300px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="displayDate" 
                stroke="#6b7280"
                fontSize={12}
                interval="preserveStartEnd"
              />
              <YAxis 
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="var(--color-primary)" 
                strokeWidth={3}
                dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 5 }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      <div style={{ 
        marginTop: '1rem', 
        padding: '1rem', 
        backgroundColor: 'var(--color-light-gray)', 
        borderRadius: 'var(--border-radius)',
        fontSize: '0.9rem',
        color: '#6b7280'
      }}>
        <p style={{ margin: 0 }}>
          <strong>Your progress matters.</strong> Each entry helps you understand your patterns and celebrate your growth.
        </p>
      </div>
    </Card>
  );
};

export default ProgressChart;