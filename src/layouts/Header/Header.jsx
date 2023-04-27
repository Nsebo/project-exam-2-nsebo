import React from 'react';
import styles from "../Footer/Footer.module.scss";

const Header = () => {
    return (
        <div>
            <header className={styles.header_container}>
                <h1 className={styles.header_name}>Holidaze</h1>
                <nav className={styles.nav_container}>
                    <ul>
                        <li>Explore</li>
                        <li>Rooms</li>
                        <li>About</li>
                        <li>List your property</li>
                    </ul>
                </nav>
                <button>Log in</button>
                <button>Sign Up</button>

            </header>
        </div>
    );
};

export default Header;
