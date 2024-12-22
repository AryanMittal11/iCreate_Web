import React, { createContext, useContext, useState, useEffect } from 'react';

// Initialize the context
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const validTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light';
    setTheme(validTheme);
  }, []);

  // Update the theme in the DOM and localStorage whenever it changes
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
