import styles from "./page.module.css";
import Tag from "../../components/Tag/Tag";
import Link from "next/link";
import projectData from "../../data/projects.json";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="title">Mes Projets</h1>
      <p className="description">
        Découvrez les projets sur lesquels j&apos;ai travaillé
      </p>

      <div className={styles.grid}>
        {projectData.map((project) => (
          <Link
            href={`/projets/${project.slug}`}
            className={styles.card}
            key={project.id}
          >
            {/* TODO fix imag warning */}
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2>{project.title}</h2>
              <p>{project.shortDescription}</p>
              <div className={styles.tags}>
                {project.tags.map((tech, index) => (
                  <Tag key={index} isDark={true}>
                    {tech}
                  </Tag>
                ))}
              </div>
              <div className={styles.viewMore}><span>Voir le projet →</span></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
