import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const BookingContext = createContext(null);
export const BookingProvider = ({ children }) => {
  const [venue, setVenue] = useState('');
  const { venueId } = useParams();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [guests, setGuests] = useState(1);
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
    } catch (error) {
      console.error('Booking creation failed:', error);
      setErrorMessage('Failed to create booking. Please try again.');
    }
  };
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
    <BookingContext.Provider
      value={{
        handleBookingSubmit,
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
        setDateFrom,
        setDateTo,
        setErrorMessage,
        setGuests,
        setVenue,
        venueId,
        venue,
        errorMessage,
        dateFrom,
        dateTo,
        guests,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
