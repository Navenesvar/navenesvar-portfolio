import React from 'react';
import styles from './Achievements.module.css';
import { useTheme } from '../../common/ThemeContext';
import hackathonImage from '../../assets/socio1.jpg';
import rankImage from '../../assets/rank.png';
import codeathonImage from '../../assets/codeathon.png'; // Add image for CODEATHON achievement

function Achievements() {
  const { theme } = useTheme();

  return (
    <section id="achievements" className={styles.container}>
      <br /><br /><br />
      <h1 className='sectionTitle'>Achievements</h1>
      <div className={styles.achievementCard}>
        <img src={codeathonImage} width='100%' alt="CODEATHON at TECHNEXUS" className={styles.image} />
        <div className={styles.textContent}>
          <h2 className={styles.achievementTitle}>Second Place - CODEATHON at TECHNEXUS</h2>
          <p className={styles.date}>Organized by IEEE LICET Student Branch Chapter - Chennai</p>
          <p className={styles.description}>
            Excited to share that my team and I secured Second Place and won a cash prize of ₹2500 in the CODEATHON at TECHNEXUS organized by the IEEE LICET Student Branch Chapter and the Department of ECE in association with the IEEE Photonics Society Madras section at Loyola-ICAM College of Engineering and Technology, Chennai! 🚀 The event challenged us with rounds of technical MCQs, coding problems, and a final round of problem solving.
          </p>
        </div>
      </div>
      <div className={styles.achievementCard}>
        <img src={hackathonImage} width='100%' alt="Hackathon" className={styles.image} />
        <div className={styles.textContent}>
          <h2 className={styles.achievementTitle}>Socio-Tech Hackathon 2024</h2>
          <p className={styles.date}>24-Hour Hackathon - 29th and 30th January 2024, Coimbatore District</p>
          <p className={styles.description}>
            Participated with a team of 5 in the Socio Tech Hackathon 2024 at KPR College of Arts and Science Research. Competing against 700+ teams, we were honored to be among the finalists. Our project focused on developing an innovative web and mobile-based tool for mapping the water supply network in Coimbatore, addressing critical infrastructure needs with technology.
          </p>
        </div>
      </div>

      <div className={styles.achievementCard}>
        <img src={rankImage} width='100%' alt="2nd Rank Holder" className={styles.image} />
        <div className={styles.textContent}>
          <h2 className={styles.achievementTitle}>2nd Rank Holder - Department of CSE (2022-2023)</h2>
          <p className={styles.date}>Academic Year 2022-2023, BE in CSE</p>
          <p className={styles.description}>
            Secured 2nd rank in the Department of Computer Science and Engineering for the academic year 2022-2023 in the Anna University Examinations, showcasing dedication to academic excellence and consistent performance in core subjects.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Achievements;
