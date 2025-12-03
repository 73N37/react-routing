import styles from "./ThemeToggle.module.css";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className={styles.button} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}