import React from 'react';
import styles from './Header.module.scss';

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
                        <li>About</li>
                        <li>List your property</li>
                    </ul>
                </nav>
                <div className={styles.btn}>
                    <button className={styles.btn_logIn}>Log in</button>
                    <button className={styles.btn_signUp}>Sign Up</button>
                </div>
            </header>

    );
};

export default Header;
