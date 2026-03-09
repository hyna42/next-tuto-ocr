import styles from "./Footer.module.css";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Amadou.</p>
      <p className={styles.links}>
        <a href="https://github.com/hyna42" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/bylojalo/" target="_blank">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}