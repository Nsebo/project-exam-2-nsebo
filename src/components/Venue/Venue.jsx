import React, { useContext } from 'react';
import styles from './Venue.module.scss';
import { VenueContext } from '../../context/venue-context';
import VenueCard from '../VenueCard/VenueCard';

const Venue = () => {
  const { venues } = useContext(VenueContext);
  const sixVenues = venues.slice(0, 6);
  console.log(sixVenues);

  return (
    <section className={styles.venue_wrapper}>
      <h3>TOP DESTINATION</h3>
      <h2>Explore Top Destination</h2>
      <div className={styles.venue_container}>
        {sixVenues.map((venue) => {
          return (
            <VenueCard
              imgUrl={venue.media[0]}
              price={venue.price}
              name={venue.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Venue;
