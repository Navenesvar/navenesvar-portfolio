import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, techStack, link }) {
  return (
    <a href={link} target="_blank" className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.techStack}>
        {techStack.map((tech, index) => (
          <span key={index} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}

export default ProjectCard;
