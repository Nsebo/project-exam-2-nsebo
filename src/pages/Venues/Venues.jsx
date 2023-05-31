import React, { useContext } from 'react';
import { VenueContext } from '../../context/venue-context';
import VenueCard from '../../components/VenueCard/VenueCard';
import styles from './Venues.module.scss';
import Layout from '../../layouts/Layout/Layout';
import searchIcon from '../../assets/search.svg';

const Venues = () => {
  const { venues, setSearchVenues, searchVenues } = useContext(VenueContext);
  const Venues = venues.slice(0, 21);

  const onSearchHandler = (e) => {
    if (!e.target.value) return setSearchVenues(venues);

    const filteredVenues = venues.filter((venue) => {
      return venue.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(filteredVenues);
    setSearchVenues(filteredVenues);
  };
  return (
    <Layout>
      {searchVenues && (
        <div className={styles.venues_wrapper}>
          <form
            className={styles.heroBanner}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.search}>
              <span>
                <img src={searchIcon} alt='search icon' />
              </span>
              <input
                type='search'
                name='text'
                className={styles.search}
                id='text'
                placeholder='Search'
                onChange={onSearchHandler}
              />
            </div>
          </form>{' '}
          <h1>Featured Venues</h1>
          <div className={styles.venues_container}>
            {searchVenues.map((venue) => {
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
