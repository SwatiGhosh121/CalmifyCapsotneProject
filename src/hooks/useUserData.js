const STORAGE_KEY = 'calmifyApp';

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