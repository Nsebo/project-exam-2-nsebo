import React from 'react';
import styles from './Hero.module.scss';
import heroBannerImg from "../../assets/hero-banner-img.jpg";

const Hero = () => {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_details}>
                <img src={heroBannerImg} alt='heroBanner Image' />
                <h1>STAY WITH COMFORT</h1>
                <p>Your home away from home where you stay with comfort</p>
            </div>
            <button>Book Now</button>
        </section>
    );
};

export default Hero;
