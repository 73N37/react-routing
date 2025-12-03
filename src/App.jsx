import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css';
import Layout from './components/Layout';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/user')
      .then(res => {
        if (!res.ok) throw new Error("Failed to connect to the server");
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => {
        console.error("Failed to fetch users", err);
        setError("Could not load users. Is the backend running?");
      });
  }, []);

  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Welcome to the Dashboard</h1>
        <p>Manage your users and settings from one place.</p>
      </div>

      <section className={styles.section}>
        <h2>User Directory</h2>
        {error && <div style={{ color: 'red', padding: '1rem', background: '#ffe6e6', borderRadius: '4px' }}>{error}</div>}
        <div className={styles.grid}>
          {users.map(user => (
            <Link to={`/user/${user.id}`} key={user.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{user.login.charAt(0).toUpperCase()}</div>
                <h3>{user.login}</h3>
              </div>
              <div className={styles.cardBody}>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Role:</strong> <span className={styles.badge}>{user.roles}</span></p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default App;