'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add(styles.dark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
    document.body.classList.toggle(styles.dark, !darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className={styles.toggleButton}>
      Toggle to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}