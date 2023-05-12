import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className={styles.header_container}>
      <div>
        <h1 className={styles.header_logo}>Holidaze</h1>
      </div>
      <nav className={styles.nav_container}>
        <ul className={styles.ul}>
          <li>Explore</li>
          <li>Rooms</li>
          <li>List your property</li>
        </ul>
      </nav>
      <div className={styles.btn}>
        <Button buttonText='Login' to='/login' />
        <Button buttonText='Sign Up' to='/signup' gray={true} />
      </div>
    </header>
  );
};

export default Header;
