import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_section}>
                <div className={styles.footer_info}>
                <h1 className={styles.footer_name}>
                   Holidaze
                </h1>
                    <p>Your home away from home <strong>where you stay with comfort</strong>
                       </p>
                </div>
                <div className={styles.useful_links}>
                    <div className={styles.footer_links}>Useful Links</div>
                    <ul>
                        <li>Explore</li>
                        <li>Sign Up</li>
                        <li>Login</li>
                        <li>About Us</li>
                        <li>Rooms</li>
                    </ul>
                </div>
                <div className={styles.form_section}>
                    <div className={styles.footer_title}>Get in Touch</div>
                    <form action="/" method="post" className={styles.form}>
                        <input type="text" name="name" className={styles.name} id="name" placeholder="Enter your Name"/>
                        <input type="email" name="email" className={styles.email} id="email" placeholder="Enter your Email Address"/>
                        <textarea type="text" name="message" className={styles.message} id="message"
                                  placeholder="Enter your message..."></textarea>
                        <button type="submit" className={styles.submit_btn}>Send Message</button>
                    </form>
                </div>
            </div>
            <div className='copy-right'>Copyright &copy; 2023 | Nsebo</div>
        </footer>

    );
}

export default Footer;
