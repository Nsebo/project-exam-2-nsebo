import React from 'react';
import styles from './Hero.module.scss';

import Button from '../../layouts/Button/Button';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_details}>
        <h1>STAY WITH COMFORT</h1>
        <p>Your home away from home where you stay with comfort</p>
        <Button buttonText='Book Now' to='/book-now' white={true}/>
      </div>
    </section>
  );
};

export default Hero;
