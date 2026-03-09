import styles from "./page.module.css";
import projectData from "../../../data/projects.json";
import { notFound } from "next/navigation";

// Liste de projets (normalement, ça viendrait d'une API ou d'une base de données)
// const projects = {
//    'portfolio': {
//        title: 'Portfolio Personnel',
//        slug: 'portfolio',
//        description: 'Site web moderne construit avec Next.js, présentant mes projets et compétences de manière interactive.',
//        tags: ['Next.js', 'React', 'CSS Modules'],
//        image: '/images/portfolio.jpg',
//        github: 'https://github.com/...',
//        demo: 'https://...'
//    },
//    'ecommerce': {
//        title: 'App E-commerce',
//        slug: 'ecommerce',
//        description: 'Application de vente en ligne complète avec gestion du panier, paiement et interface d\'administration.',
//        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//        image: '/images/ecommerce.jpg',
//        github: 'https://github.com/...',
//        demo: 'https://...'
//    },
//    'blog': {
//        title: 'Blog Technique',
//        slug: 'blog',
//        description: 'Blog personnel sur le développement web avec système de commentaires et gestion de contenu Markdown.',
//        tags: ['Next.js', 'Markdown', 'SEO', 'RSS'],
//        image: '/images/blog.jpg',
//        github: 'https://github.com/...',
//        demo: 'https://...'
//    }
// }

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  // Next.js passe automatiquement le slug dans params
  const project = projectData.find((project) => project.slug === slug);

  // Si le projet n'existe pas, afficher un message
  if (!project) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          {/* <div className={styles.imagePlaceholder}>
            
          </div> */}
          {/* TODO fix imag warning */}
          <img
            className={styles.imagePlaceholder}
            src={project.image}
            alt={project.title}
          />
        </div>

        <div className={styles.details}>
          <h2>Technologies utilisées</h2>
          <div className={styles.tags}>
            {project.tags.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {/* TODO maj link projets */}
              Voir le code →
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.linkPrimary}`}
            >
              Voir la démo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
