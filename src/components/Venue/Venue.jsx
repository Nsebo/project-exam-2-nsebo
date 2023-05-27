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
   <div className={styles.venue_details}>
       <div>
           <h2>Explore our featured venues</h2>
           <p>Featured Venues</p>
       </div>
       <Link to="/venues">View all items</Link>
   </div>

      <div className={styles.venue_container}>
        {sixVenues.map((venue, idx) => {
          return (
            <VenueCard
                key={idx}
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
