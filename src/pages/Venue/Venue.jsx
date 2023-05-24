import React, { useEffect, useState } from 'react';
import styles from './Venue.module.scss';
import star from '../../assets/star.png';
import map from '../../assets/map.png';
import wifi from '../../assets/wifi.png';
import car from '../../assets/car.png';
import breakfast from '../../assets/food-bank.png';
import pets from '../../assets/pets.png';
import Button from '../../layouts/Button/Button';
import { useParams } from 'react-router-dom';
import Layout from '../../layouts/Layout/Layout';
import axios from 'axios';

const Venue = () => {
  const [venue, setVenue] = useState('');

  const {
    name,
    description,
    media,
    price,
    rating,
    created,
    updated,
    meta,
    location,
    maxGuests,
  } = venue;

  // const isoCreatedDateString = created;
  // const isoUpdatedDateString = updated;
  // const createdDate = new Date(isoCreatedDateString);
  // const updatedDate = new Date(isoUpdatedDateString);

  // const options = { day: '2-digit', month: 'short', year: 'numeric' };
  // const formatter = new Intl.DateTimeFormat('en-US', options);
  // const formattedCreatedDate = formatter.format(createdDate);
  // const formattedUpdatedDate = formatter.format(updatedDate);
  // console.log(formattedCreatedDate);
  // console.log(formattedUpdatedDate);

  const { venueId } = useParams();

  useEffect(() => {
    axios
      .get(`https://nf-api.onrender.com/api/v1/holidaze/venues/${venueId}`)
      .then((res) => {
        setVenue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.venue_details}>
          <h3>{name}</h3>
          <div className={styles.rate}>
            <p>
              <img src={star} alt='star' /> {rating}{' '}
              <span className={styles.circle}></span>
            </p>
            <p>
              123 reviews
              <span className={styles.circle}></span>
            </p>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.images}>
          <img src={media} alt='venue image' />
          <img src={media} alt='venue image' />
          <img src={media} alt='venue image' />
        </div>

        <div className={styles.hosted}>
          <h4>Entire villa hosted by Cey</h4>
          <p>{maxGuests} guests</p>
          {/* <small>{formattedCreatedDate}</small>
          <small>{formattedUpdatedDate}</small> */}
        </div>
        <>
          <h2>Enjoy our amenities</h2>
          <div className={styles.amenities}>
            <div className={styles.wifi}>
              <img src={wifi} alt='wifi' />
              <p>Wifi</p>
            </div>
            <div className={styles.parking}>
              <img src={car} alt='parking' />
              <p>Parking</p>
            </div>
            <div className={styles.breakfast}>
              <img src={breakfast} alt='breakfast' />
              <p>BreakFast</p>
            </div>
            <div className={styles.pets}>
              <img src={pets} alt='pets' />
              <p>Pets</p>
            </div>
          </div>
          <>
            <h2>Where will you be</h2>
            <img src={map} alt='map' />
          </>
        </>
        <div className={styles.bookings}>
          <h3>{price}</h3>
          <>
            <div className={styles.checks}>
              <label htmlFor='checkIn'>
                {' '}
                Check-In
                <input type='date' />
              </label>
              <label htmlFor='checkOut'>
                {' '}
                Check-Out
                <input type='date' />
              </label>
            </div>
            <div className={styles.guests}>
              <label htmlFor='guests'>
                {' '}
                Guests
                <select name='guest'>
                  <option value='one'>1 guest</option>
                  <option value='two'>2 guest</option>
                  <option value='three'>3 guest</option>
                  <option value='four'>4 guest</option>
                  <option value='five'>5 guest</option>
                </select>
              </label>
            </div>
            <Button buttonText='Reserve' gray={true} />
            <small>You won't be charged yet</small>
          </>
        </div>
      </div>
    </Layout>
  );
};

export default Venue;
