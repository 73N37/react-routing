import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "./components/Layout";
import styles from "./User.module.css";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/user/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (error) return <Layout><div>Error: {error}</div></Layout>;
  if (!user) return <Layout><div>User not found</div></Layout>;

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
            <h2>User Details</h2>
        </div>
        
        <div className={styles.detailRow}>
            <span className={styles.label}>ID:</span>
            <span className={styles.value}>{user.id}</span>
        </div>
        <div className={styles.detailRow}>
            <span className={styles.label}>Login:</span>
            <span className={styles.value}>{user.login}</span>
        </div>
        <div className={styles.detailRow}>
            <span className={styles.label}>Role:</span>
            <span className={styles.value}>{user.roles}</span>
        </div>
        <div className={styles.detailRow}>
            <span className={styles.label}>Password:</span>
            <span className={styles.value}>{user.password}</span>
        </div>

        <Link to="/" className={styles.backLink}>&larr; Back to Dashboard</Link>
      </div>
    </Layout>
  );
}

export default User;
