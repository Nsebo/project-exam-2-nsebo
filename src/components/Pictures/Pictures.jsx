import React, { useContext } from 'react';
import { VenueContext } from '../../context/venue-context';
import PictureCard from '../PictureCard/PictureCard';
import styles from './Pictures.module.scss';

const Pictures = () => {
  const { venues } = useContext(VenueContext);
  const sixPictures = venues.slice(0, 9);
  return (
    <section className={styles.picture_wrapper}>
      <h2>Sort by</h2>
      <div className={styles.picture_container}>
        {sixPictures.map((picture) => {
          return <PictureCard imgUrl={picture.media[0]} />;
        })}
      </div>
    </section>
  );
};

export default Pictures;
