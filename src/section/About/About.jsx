import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import aboutImg from '../../assets/me-modified.png';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function About() {
  const { theme, toggleTheme } = useTheme();

  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    const text = "Hi, I'm Navenesvar K";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypingText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed here (lower interval means faster typing)
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={aboutImg}
          className={styles.about}
          alt="Profile picture of Navenesvar K"
        />
      </div>
      <div className={styles.info}>
        <h1>{typingText}</h1>
        <h2>Web Developer</h2>
        <br />
        <p className={styles.description}>
        Passionate about crafting modern web applications that prioritize usability and performance
        </p>
        <br />
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
