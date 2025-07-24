import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const USERS_STORAGE_KEY = 'calmifyUsers';
const CURRENT_USER_STORAGE_KEY = 'calmifyCurrentUser';

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const getUsers = () => {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  };

  const setUsers = (users) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = getUsers();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          setCurrentUser(user);
          setIsLoggedIn(true);
          localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid username or password.'));
        }
      }, 500);
    });
  };

  const signup = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = getUsers();
        if (users.find(u => u.username === username)) {
          return reject(new Error('Username already exists.'));
        }
        const newUser = { id: Date.now(), username, password };
        const newUsers = [...users, newUser];
        setUsers(newUsers);
        setCurrentUser(newUser);
        setIsLoggedIn(true);
        localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(newUser));
        resolve(newUser);
      }, 500);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 