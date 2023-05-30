import React, { useContext } from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { LoginContext } from '../../context/login-context';

const Header = () => {
    const { data } = useContext(LoginContext);

    return (
        <header className={styles.header_container}>
            <Link to="/">
                <h1 className={styles.header_logo}>Holidaze</h1>
            </Link>
            <nav className={styles.nav_container}>
                <ul className={styles.ul}>
                    <Link to='/venues'>Explore</Link>
                    <Link to='/my-venues'>My Venues</Link>
                    <Link to='/create-venues'>List a room</Link>
                </ul>
            </nav>
            {data?.accessToken ? (
                <p>Hello {data.name}</p>
            ) : (
                <div className={styles.btn}>
                    <Button buttonText='Login' to='/login' />
                    <Button buttonText='Sign Up' to='/signup' gray={true} />
                </div>
            )}
        </header>
    );
};

export default Header;
