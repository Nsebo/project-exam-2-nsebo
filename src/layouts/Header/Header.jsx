import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header_container}>
      <Link to="/">
        <h1 className={styles.header_logo}>
           Holidaze
        </h1>
      </Link>
      <nav className={styles.nav_container}>
        <ul className={styles.ul}>
          <Link to='/venues'>Venues</Link>
            <Link>List your Venues</Link>
          <Link>Switch to Hosting</Link>
        </ul>
      </nav>
      <div className={styles.btn}>
        <Button buttonText='Login' to='/login' white={true} />
        <Button buttonText='Sign Up' to='/signup' gray={true} />
      </div>
    </header>
  );
};

export default Header;
