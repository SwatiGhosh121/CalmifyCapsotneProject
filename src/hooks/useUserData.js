import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'mindfulMomentsData';

function getData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { moodLogs: {}, journalEntries: {} };
}

function setData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getMoodLogsForUser(userId) {
  const data = getData();
  return data.moodLogs[userId] || [];
}

export function addMoodLogForUser(userId, newLog) {
  const data = getData();
  if (!data.moodLogs[userId]) data.moodLogs[userId] = [];
  data.moodLogs[userId] = [newLog, ...data.moodLogs[userId]];
  setData(data);
}

export function getJournalEntriesForUser(userId) {
  const data = getData();
  return data.journalEntries[userId] || [];
}

export function addJournalEntryForUser(userId, newEntry) {
  const data = getData();
  if (!data.journalEntries[userId]) data.journalEntries[userId] = [];
  data.journalEntries[userId] = [newEntry, ...data.journalEntries[userId]];
  setData(data);
}

export const useUserData = () => {
  const [userData, setUserData] = useState(getInitialData);

  useEffect(() => {
    try {
      window.localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [userData]);

  const addMoodLog = useCallback((mood, note) => {
    const newLog = {
      id: Date.now(),
      mood,
      note,
      date: new Date().toISOString(),
    };

    setUserData(prevData => ({
      ...prevData,
      moods: [newLog, ...prevData.moods].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    }));
  }, []);

  const addJournalEntry = useCallback((title, content) => {
    const newEntry = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString(),
    };

    setUserData(prevData => ({
      ...prevData,
      journal: [newEntry, ...prevData.journal].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    }));
  }, []);

  return { userData, addMoodLog, addJournalEntry };
};