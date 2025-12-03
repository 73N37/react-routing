import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';
import ThemeToggle from '../ThemeToggle';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">WireframeUI</Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
        </nav>
        <div className={styles.actions}>
            <ThemeToggle />
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Wireframe Test. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
