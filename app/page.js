import  Tag  from "../components/Tag/Tag";
import styles from "./page.module.css";

const technologies = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Node.js",
  // "Express",
  // "NestJS",
  // "Wordpress",
  // "PHP",
  // "GraphQL",
  // "PostgreSQL",
  // "MongoDB",
  // "Docker",
  // "Git",
];

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>Amadou</span>
        </h1>
        <p className={styles.heroSubtitle}>Développeur Full-Stack</p>
        <p className={styles.heroDescription}>
          Je crée des applications web et mobiles modernes, performantes et
          accessibles avec React, Next.js, Vue.js, Nuxt.js et Node.js,
        </p>
        <div className={styles.heroButtons}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes projets
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
          <div className={styles.tagsContainer}>
             {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
         </div>
        </div>
      </div>
    </div>
  );
}
