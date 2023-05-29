import React from 'react';
import styles from './Hero.module.scss';

import Button from '../../layouts/Button/Button';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_details}>
        <h1>STAY WITH COMFORT</h1>
        <p>Stay in the world's most remarkable homes
        </p>
        <Button buttonText='Explore more' to='/venues' white={true}/>
      </div>
    </section>
  );
};

export default Hero;
