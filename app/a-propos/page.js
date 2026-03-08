import styles from "./page.module.css";

export default function About() {
  return (
    <div className="container">
      <h1 className="title">À propos de moi</h1>

      <div className={styles.content}>
        <div className={styles.bio}>
          <h2>Qui suis-je ?</h2>
          <p>
            Développeur Fullstack passionné avec 3 ans d&apos;expérience dans la
            création d&apos;applications web et mobiles modernes et
            performantes. Spécialisé dans l&apos;écosystème React, Next.js, Vue.js et Nuxt.js
          </p>
          <p>
            J&apos;aime transformer des idées en produits concrets qui résolvent
            de vrais problèmes utilisateurs.
          </p>
        </div>

        <div className={styles.skills}>
          <h2>Compétences</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <ul>
                <li>React & Next.js</li>
                <li>Vue.js & Nuxt.js</li>
                <li>Typerscript</li>
                <li>PHP & WordPress</li>
                <li>Tailwind Css</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Appolo GraphQL</li>
                <li>API REST</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Environnements</h3>
              <ul>
                <li>Docker</li>
                <li>Linux</li>
                <li>AWS</li>
                <li>GCP</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Outils</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
