import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context/login-context';
import axios from 'axios';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import BookingCard from '../BookingCard/BookingCard';
import styles from './Bookings.module.scss';

const Bookings = () => {
  console.log('hello');
  const { data } = useContext(LoginContext);

  const [bookings, setBookings] = useState([]);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `https://nf-api.onrender.com/api/v1/holidaze/profiles/${data.name}/bookings?_venue=true`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setBookings(response.data);
        console.log('Bookings:', response.data);
        // You can handle the response data here, such as updating the state with the fetched bookings.
      } catch (error) {
        console.error('Error fetching bookings:', error);
        // You can handle the error here, such as showing an error message to the user.
      }
    };

    if (accessToken) {
      fetchBookings();
    }
  }, [accessToken]);

  console.log(bookings.venue);

  return (
    <>
      <Header />
      <div className={styles.bookings_wrapper}>
        <h1>My Bookings</h1>
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            venue={booking.venue}
            dateFrom={booking.dateFrom}
            dateTo={booking.dateTo}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Bookings;
