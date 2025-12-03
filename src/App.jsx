import { useState, useEffect } from 'react';
import styles from './App.module.css';
import ThemeToggle from './ThemeToggle';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={styles.app}>
      <h1>Hello React</h1>
      <p>This app uses CSS variables for a scalable theme system.</p>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className={styles.card}>Themed content box</div>
    </div>
  );
}

export default App;