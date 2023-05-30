import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditVenue = ({ venueId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState('');
  const [price, setPrice] = useState(0);
  const [maxGuests, setMaxGuests] = useState(0);
  const [rating, setRating] = useState(0);
  const [wifi, setWifi] = useState(true);
  const [parking, setParking] = useState(true);
  const [breakfast, setBreakfast] = useState(true);
  const [pets, setPets] = useState(true);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [continent, setContinent] = useState('');
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch venue details using the venueId
    const fetchVenue = async () => {
      try {
        const response = await axios.get(
          `https://nf-api.onrender.com/api/v1/holidaze/venues/${venueId}`
        );
        const venueData = response.data;

        setName(venueData.name);
        setDescription(venueData.description);
        setMedia(venueData.media[0]);
        setPrice(venueData.price);
        setMaxGuests(venueData.maxGuests);
        setRating(venueData.rating);
        setWifi(venueData.meta.wifi);
        setParking(venueData.meta.parking);
        setBreakfast(venueData.meta.breakfast);
        setPets(venueData.meta.pets);
        setAddress(venueData.location.address);
        setCity(venueData.location.city);
        setZip(venueData.location.zip);
        setCountry(venueData.location.country);
        setContinent(venueData.location.continent);
        setLat(venueData.location.lat);
        setLng(venueData.location.lng);
      } catch (error) {
        setError('Failed to fetch venue details');
      }
    };

    fetchVenue();
  }, [venueId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      !name ||
      !description ||
      !address ||
      !city ||
      !zip ||
      !country ||
      !continent
    ) {
      setError('All fields are required');
      return;
    }

    const updatedVenueData = {
      name,
      description,
      media: [media],
      price,
      maxGuests,
      rating,
      meta: {
        wifi,
        parking,
        breakfast,
        pets,
      },
      location: {
        address,
        city,
        zip,
        country,
        continent,
        lat,
        lng,
      },
    };

    try {
      const response = await axios.put(
        `https://nf-api.onrender.com/api/v1/holidaze/venues/${venueId}`,
        updatedVenueData
      );

      if (response.data) {
        // Venue update successful
        // You can redirect the user or show a success message here
        console.log('Venue update successful');
      } else {
        // Venue update failed
        // You can handle the error and display an appropriate message
        setError('Venue update failed');
      }
    } catch (error) {
      // Handle any network errors
      setError('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Edit Venue</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Enter Venue Name'
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder='Enter Description'
          ></textarea>
        </label>
        <label>
          Media:
          <input
            type='text'
            value={media}
            onChange={(e) => setMedia(e.target.value)}
            required
            placeholder='Enter Venue Image Url'
          />
        </label>
        <label>
          Price (kr NOK):
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            required
            placeholder='Enter Venue Price'
          />
        </label>
        <label>
          Max Guests:
          <input
            type='number'
            value={maxGuests}
            onChange={(e) => setMaxGuests(parseInt(e.target.value))}
            required
            placeholder='Enter Venue Maximum Guest'
          />
        </label>
        <label>
          Rating:
          <input
            type='number'
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
            placeholder='Enter Venue Rating'
            minLength='1'
            min='0'
            max='5'
          />
        </label>
        <label>
          Wifi:
          <input
            type='checkbox'
            checked={wifi}
            onChange={(e) => setWifi(e.target.checked)}
            required
          />
        </label>
        <label>
          Parking:
          <input
            type='checkbox'
            checked={parking}
            onChange={(e) => setParking(e.target.checked)}
            required
          />
        </label>
        <label>
          Breakfast:
          <input
            type='checkbox'
            checked={breakfast}
            onChange={(e) => setBreakfast(e.target.checked)}
            required
          />
        </label>
        <label>
          Pets:
          <input
            type='checkbox'
            checked={pets}
            onChange={(e) => setPets(e.target.checked)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder='Enter Venue Address'
          />
        </label>
        <label>
          City:
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder='Enter Venue City'
          />
        </label>
        <label>
          Zip:
          <input
            type='text'
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
            placeholder='Enter Venue Zip'
          />
        </label>
        <label>
          Country:
          <input
            type='text'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            placeholder='Enter Venue Country'
          />
        </label>
        <label>
          Continent:
          <input
            type='text'
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
            required
            placeholder='Enter Venue Continent'
          />
        </label>
        <label>
          Latitude:
          <input
            type='number'
            value={lat}
            onChange={(e) => setLat(parseFloat(e.target.value))}
            required
            placeholder='Enter Venue Latitude'
          />
        </label>
        <label>
          Longitude:
          <input
            type='number'
            value={lng}
            onChange={(e) => setLng(parseFloat(e.target.value))}
            required
            placeholder='Enter Venue Longitude'
          />
        </label>
        <button type='submit'>Update</button>
        <button type='button' onClick={handleDelete}>
          Delete
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default EditVenue;
