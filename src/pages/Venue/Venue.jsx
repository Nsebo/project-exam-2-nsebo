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
  const { venueId } = useParams();

  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [guests, setGuests] = useState(1);
  // const [venueId, setVenueId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(guests)) {
      setErrorMessage('Please enter a valid number for guests.');
      return;
    }

    const bookingData = {
      dateFrom: new Date(dateFrom),
      dateTo: new Date(dateTo),
      guests: parseInt(guests),
      venueId,
    };
    console.log(dateFrom, dateTo, guests, venueId);

    try {
      const accessToken = localStorage.getItem('accessToken');

      const response = await axios.post(
        'https://nf-api.onrender.com/api/v1/holidaze/bookings',
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('Booking created:', response.data);
      // You can handle the success response here, such as showing a success message or redirecting the user.
    } catch (error) {
      console.error('Booking creation failed:', error);
      setErrorMessage('Failed to create booking. Please try again.');
      // You can handle the error response here, such as showing an error message to the user.
    }
  };

  // console.log(errorMessage, venueId);

  // console.log(errorMessage);

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

  useEffect(() => {
    axios
      .get(
        `https://nf-api.onrender.com/api/v1/holidaze/venues/${venueId}?_owner=true`
      )
      .then((res) => {
        setVenue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div className={styles.venue_container}>
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
          <div className=''>
            <img src={media} alt='venue image' className={styles.first_image} />
          </div>
          <div className={styles.second}>
            <img
              src={media}
              alt='venue image'
              className={styles.second_image}
            />
            <img src={media} alt='venue image' className={styles.third_image} />
          </div>
        </div>

        <div className={styles.bottom}>
          <div>
            <div className={styles.hosted}>
              <h4>Entire villa hosted by Cey</h4>
              <p>{maxGuests} guests</p>
              {/* <small>{formattedCreatedDate ? formattedCreatedDate : ''}</small>
          <small>{formattedUpdatedDate ? formattedUpdatedDate : ''}</small> */}
            </div>
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
            <div>
              <h2>Where will you be</h2>
              <img src={map} alt='map' />
            </div>
          </div>
          <div className={styles.bookings}>
            <h3>{price}kr NOK nights</h3>
            <form
              className={styles.bookings_details}
              onSubmit={handleBookingSubmit}
            >
              <div className={styles.checks}>
                <label>
                  Check In:
                  <input
                    type='date'
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Check Out:
                  <input
                    type='date'
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className={styles.guests}>
                <label>
                  Guests:
                  <input
                    type='number'
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    required
                  />
                </label>
              </div>
              <button>Submit</button>
              <Button
                buttonText='Reserve'
                gray={true}
                width={true}
                submit={true}
              />
              <small>You won't be charged yet</small>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Venue;
