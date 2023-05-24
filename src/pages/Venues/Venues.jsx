import React, { useContext } from 'react';
import { VenueContext } from '../../context/venue-context';
import VenueCard from '../../components/VenueCard/VenueCard';
import styles from './Venues.module.scss';
import Layout from '../../layouts/Layout/Layout';
import Location from '../../components/Location/Location';

const Venues = () => {
  const { venues } = useContext(VenueContext);
  const Venues = venues.slice(0, 21);
  return (
    <Layout>
      {venues && (
        <div className={styles.venues_wrapper}>
          <Location />
          <h1>Featured Venues</h1>
          <div className={styles.venues_container}>
            {Venues.map((venue) => {
              return (
                <VenueCard
                  imgUrl={venue.media[0]}
                  price={venue.price}
                  name={venue.name}
                  id={venue.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Venues;
