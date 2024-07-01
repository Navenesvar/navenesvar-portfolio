import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'BeatBox',
      description: 'A Music Web Application',
      techStack: ['Python', 'Django', 'Sqlite'],
      link: 'https://github.com/Navenesvar/Naanmudhalvan_Project_Submission_Navenesvar-K_4040_LICET/',
    },
    {
      title: 'ExamEnroll',
      description: 'An exam registration system',
      techStack: ['Java', 'SpringBoot','HTML','CSS', 'MySQL'],
      link: 'https://github.com/Navenesvar/ExamEnroll/',
    },
    {
      title: 'SpeechToText',
      description: 'A Speech to Text Translator',
      techStack: ['Python','Speech recognition','Googletrans'],
      link: 'https://github.com/Navenesvar/SpeechToText/',
    },
    {
      title: 'Todo List',
      description: 'An Task managing Web app',
      techStack: ['React','nodejs','CSS'],
      link: 'https://github.com/Navenesvar/Todo_List_React/',
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <br /><br /><br /><br /><br /><br /><br />
      <h1 className="sectionTitle">Projects</h1>
      <br /><br /><br /><br /><br />
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
      <br /><br /><br /><br /><br />
    </section>
  );
}

export default Projects;
