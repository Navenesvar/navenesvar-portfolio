import React from "react";
import styles from "./Contact.module.css";
import mailIcon from '../../assets/mail-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github.jpg';

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1 className="sectionTitle">Contact</h1>
        <p>Feel free to reach out!</p>
      </div>
      <ul>
        <li className={styles.link}>
          <img 
            src={mailIcon} 
            width='10%' 
            height='10%' 
            alt="Email icon" 
          />
            <a href="mailto:navenesvar@email.com">navenesvar@email.com</a>
        </li>
        <br />
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            width='10%'
            height='10%'
          />
          <a href="https://www.linkedin.com/in/navenesvar-k-745683230/">linkedin.com/Navenesvar</a>
        </li>
        <br />
        <li className={styles.link}>
          <img 
            src={githubIcon} 
            width='10%' 
            height='10%' 
            alt="Github icon" 
          />
          <a href="https://www.github.com/Navenesvar">github.com/Navenesvar</a>
        </li>
        <br />
      </ul>
    </section>
  );
};
export default Contact;