import styles from './VenueManager.module.scss';
import venueManager from '../../assets/venueManager.png';
import home_logo from '../../assets/home-logo.png';
import Button from '../../layouts/Button/Button';
import { LoginContext } from '../../context/login-context';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import VenueManagerCard from '../../components/VenueManagerCard/VenueManagerCard';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

const VenueManager = () => {
  const { data } = useContext(LoginContext);
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        // Retrieve access token from local storage
        const accessToken = localStorage.getItem('accessToken');

        const response = await axios.get(
          `https://nf-api.onrender.com/api/v1/holidaze/profiles/${data.name}/venues`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const venuesData = response.data;
        setVenues(venuesData);
      } catch (error) {
        setError('Failed to fetch venues');
      }
    };

    fetchVenues();
  }, [data?.name]);

  const handleVenueDelete = (deletedVenueId) => {
    setVenues((prevVenues) =>
      prevVenues.filter((venue) => venue.id !== deletedVenueId)
    );
  };

  return (
    <>
      <Header />
      <section className={styles.venueManager_container}>
        <img src={venueManager} alt='image' className={styles.hero_image} />
        <div className={styles.venueManager_wrapper}>
          <div className={styles.venueManager_details}>
            <div className={styles.logo}>
              <div className={styles.logo_details}>
                <img src={home_logo} alt='home-logo' />
                <div className={styles.logo_words}>
                  <h3>Holidaze Venue</h3>
                  <small>Lorem ipsum dolor sit amet consectetur.</small>
                </div>
              </div>
            </div>
            <div className={styles.create}>
              <Button
                buttonText='Create Venue'
                gray={true}
                to='/create-venues'
              />
            </div>
          </div>
          <div className={styles.my_venues}>
            <h1>My Venues</h1>
            <div className={styles.my_venues_cards}>
              {venues.length === 0 ? (
                <p>No venues available.</p>
              ) : (
                <ul>
                  {venues.map((venue) => (
                    <VenueManagerCard
                      key={venue.id}
                      name={venue.name}
                      media={venue.media}
                      description={venue.description}
                      price={venue.price}
                      id={venue.id}
                      onDelete={handleVenueDelete} // Pass the callback function
                    />
                  ))}
                </ul>
              )}
            </div>
            {error && <p>{error}</p>}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default VenueManager;
