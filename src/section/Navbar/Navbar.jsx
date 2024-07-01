import React from 'react';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import styles from './Navbar.module.css';
import { useTheme } from '../../common/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#about">About</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#projects">Projects</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#skills">Skills</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#achievements">Achievements</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#contact">Contact</a>
        </li>
        <li className={styles.navItem}>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
