import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        src="/dog.jpg"
        alt="Profile Picture"
        className={styles.profilePic}
      />
      <h1 className={styles.userName}>Toby Bones</h1>
    </header>
  );
};

export default Header;
