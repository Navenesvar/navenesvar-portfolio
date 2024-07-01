import React from 'react';
import styles from './Skills.module.css';
import SkillList from '../../common/SkillList';
import htmlIcon from '../../assets/html-icon.png';
import cssIcon from '../../assets/css-icon.png';
import jsIcon from '../../assets/js-icon.png';
import pythonIcon from '../../assets/python-icon.png';
import javaIcon from '../../assets/java-icon.png';
import cIcon from '../../assets/c-icon.png';
import mySQLIcon from '../../assets/mysql-icon.png';
import mongoDBIcon from '../../assets/mongodb-icon.png';
import sqlIcon from '../../assets/sql-icon.png';
import djangoIcon from '../../assets/django-icon.png';
import springBootIcon from '../../assets/springboot-icon.png';
import angularIcon from '../../assets/angular-icon.png';
import reactIcon from '../../assets/react-icon.png';
import nodeIcon from '../../assets/node-icon.png';
import azureDevOpsIcon from '../../assets/azuredevops-icon.png';
import jenkinsIcon from '../../assets/jenkins-icon.png';
import gitIcon from '../../assets/git-icon.png';
import githubIcon from '../../assets/github-icon.png';
import vscodeIcon from '../../assets/vscode-icon.png';
import eclipseIcon from '../../assets/eclipse-icon.png';
import uiuxIcon from '../../assets/uiux-icon.png';
import testingIcon from '../../assets/testing-icon.png';

function Skills() {

  return (
    <section id="skills" className={styles.container}>
    <br /><br /><br />
    <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skill}>
      <div className={styles.skillCategory}>
        <h3>Languages</h3>
        <br></br>
        <div className={styles.skillList}>
          <SkillList skill="Python" skillIcon={pythonIcon} />
          <SkillList skill="Java" skillIcon={javaIcon} />
          <SkillList skill="C" skillIcon={cIcon} />
          <SkillList skill="JavaScript" skillIcon={jsIcon} />
          <SkillList skill="SQL" skillIcon={sqlIcon} />
          <SkillList skill="HTML" skillIcon={htmlIcon} />
          <SkillList skill="CSS" skillIcon={cssIcon} />
        </div>
      </div>
      </div>
      <div className={styles.skill}>
      <div className={styles.skillCategory}>
        <h3>Frameworks and Libraries</h3>
        <br></br>
        <div className={styles.skillList}>
          <SkillList skill="Django" skillIcon={djangoIcon} />
          <SkillList skill="Spring Boot" skillIcon={springBootIcon} />
          <SkillList skill="Angular" skillIcon={angularIcon} />
          <SkillList skill="React" skillIcon={reactIcon} />
          <SkillList skill="Node.js" skillIcon={nodeIcon} />
        </div>
      </div>
      </div>
      <div className={styles.skill}>
      <div className={styles.skillCategory}>
        <h3>DevOps and CI/CD Tools</h3>
        <br></br>
        <div className={styles.skillList}>
          <SkillList skill="Azure DevOps" skillIcon={azureDevOpsIcon} />
          <SkillList skill="Jenkins" skillIcon={jenkinsIcon} />
          <SkillList skill="Git" skillIcon={gitIcon} />
          <SkillList skill="GitHub" skillIcon={githubIcon} />
        </div>
      </div>
      </div>

      <div className={styles.skill}>
      <div className={styles.skillCategory}>
        <h3>Tools</h3>
        <br></br>
        <div className={styles.skillList}>
          <SkillList skill="VS Code" skillIcon={vscodeIcon} />
          <SkillList skill="Eclipse IDE" skillIcon={eclipseIcon} />
          <SkillList skill="Figma" skillIcon={uiuxIcon} />
          <SkillList skill="Selenium Java" skillIcon={testingIcon} />
        </div>
      </div>
      </div>

      <div className={styles.skill}>
      <div className={styles.skillCategory}>
        <h3>Databases</h3>
        <br></br>
        <div className={styles.skillList}>
          <SkillList skill="MySQL" skillIcon={mySQLIcon} />
          <SkillList skill="MongoDB" skillIcon={mongoDBIcon} />
        </div>
      </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </section>
  );
}

export default Skills;
