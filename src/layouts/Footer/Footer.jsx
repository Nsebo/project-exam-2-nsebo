import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png';
import home from '../../assets/home.png';
import facebook_icon from '../../assets/facebook.svg';
import instagram_icon from '../../assets/instagram.svg';
import twitter_icon from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo}>
          <h2>Holidaze</h2>
          <p>Stay in the world's most remarkable homes</p>
        </div>
        <div className={styles.footer_links}>
          <h3>Useful Links</h3>
          <ul>
            <Link to="./venues">Venues</Link>
            <Link to="./Signup">Sign Up</Link>
            <Link to="./login">Login</Link>
            <Link to="./bookings">Bookings</Link>
          </ul>
        </div>
        <div className={styles.socials}>
          <h3>Socials</h3>
          <div className={styles.icons}>
            <img src={facebook_icon} alt='social icon' />
            <img src={twitter_icon} alt='social icon' />
            <img src={instagram_icon} alt='social icon' />
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <h4>
            <img src={home} alt='mail icon' />
            furuset, 1053 oslo
          </h4>
          <h4>
            <img src={mail} alt='mail icon' />
            furuset@gmail.com
          </h4>
          <h4>
            <img src={phone} alt='mail icon' />
            +4747960268
          </h4>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2023 | Holidaze by Nsebo</p>
      </div>
    </footer>
  );
};

export default Footer;
