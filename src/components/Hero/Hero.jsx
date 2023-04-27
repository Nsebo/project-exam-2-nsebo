import React from 'react';
import styles from './Hero.module.scss';
import heroBannerImg from "../../assets/hero-banner-img.jpg";
import mapIcon from "../../assets/map-pin.svg";
import calenderIcon from "../../assets/calendar.svg";
import userIcon from "../../assets/user.svg";
import searchIcon from "../../assets/search.svg";
import Layout from "../../layouts/Layout/Layout.jsx";

const Hero = () => {
    return (
        <Layout>
        <section className={styles.hero_container}>
            <img src={heroBannerImg} alt='heroBanner Image' />
            <div className={styles.hero_details}>
                <h1>STAY WITH COMFORT</h1>
                <p>Your home away from home where you stay with comfort</p>
                <button className={styles.btn}>Book Now</button>
            </div>
            <div className={styles.heroBanner}>
                <form className={styles.heroBanner_form}>
                    <div>
                        <span className={styles.mapIcon}><img src={mapIcon} alt='map icon' /></span>
                        <input type="text" name="text" className={styles.name} id="text" placeholder="Where are you going?"/>
                    </div>
                    <div>
                        <span><img src={calenderIcon} alt='map icon' /></span>
                        <input type="text" name="text" className={styles.name} id="text" placeholder="Check in date - Check out date"  />
                    </div>
                    <div>
                        <span><img src={userIcon} alt='user icon' /></span>
                        <input type="text" name="text" className={styles.name} id="text" placeholder="1 adult. 0 children . 1 room"/>
                    </div>
                    <div>
                        <span><img src={searchIcon} alt='search icon' /></span>
                        <input type="search" name="text" className={styles.search} id="text" placeholder="Search"/>
                    </div>
                </form>
            </div>
        </section>
        </Layout>


    );
};

export default Hero;
