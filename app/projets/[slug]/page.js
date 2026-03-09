import styles from "./page.module.css";
import projectData from "../../../data/projects.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.longDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

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
          {/* TODO fix imag warning */}
          <Image
            className={styles.imagePlaceholder}
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            preload={true}
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

export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}
