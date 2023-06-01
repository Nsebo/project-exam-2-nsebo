import React, { useContext } from 'react';
import styles from './Venue.module.scss';
import { VenueContext } from '../../context/venue-context';
import VenueCard from '../VenueCard/VenueCard';
import { Link } from 'react-router-dom';

const Venue = () => {
  const { venues } = useContext(VenueContext);
  const sixVenues = venues.slice(0, 3);
  return (
    <section className={styles.venue_wrapper}>
        <section className={styles.venue}>
            <section className={styles.venue_left}>
                <h3>Featured Venues</h3>
                <p>Explore our featured Venues</p>
            </section>
            <Link to='/venues' className={styles.venue_right}>View all items</Link>
        </section>
      <div className={styles.venue_container}>
        {sixVenues.map((venue) => {
          return (
            <VenueCard
              key={venue.id}
              imgUrl={venue.media[0]}
              price={venue.price}
              name={venue.name}
              id={venue.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Venue;

