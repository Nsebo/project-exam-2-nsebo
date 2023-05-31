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

  console.log(venueId);

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
      .get(`https://nf-api.onrender.com/api/v1/holidaze/venues/${venueId}`)
      .then((res) => {
        setVenue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(venue, venueId);

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
