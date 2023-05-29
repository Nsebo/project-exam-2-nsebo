import React, { useState } from 'react';
import axios from 'axios';

const CreateVenueForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const venueData = {
      name,
      description,
      media,
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
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.post(
        'https://nf-api.onrender.com/api/v1/holidaze/venues',
        venueData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('Venue created:', response.data);
      // You can handle the success response here, such as showing a success message or redirecting the user.
    } catch (error) {
      console.error('Venue creation failed:', error);
      // You can handle the error response here, such as showing an error message to the user.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Media:
        <input
          type='text'
          value={media}
          onChange={(e) => setMedia(e.target.value)}
        />
      </label>
      <br />

      <label>
        Price:
        <input
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Max Guests:
        <input
          type='number'
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Rating:
        <input
          type='number'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <br />

      <label>
        Wifi:
        <input
          type='checkbox'
          checked={wifi}
          onChange={(e) => setWifi(e.target.checked)}
        />
      </label>
      <br />

      <label>
        Parking:
        <input
          type='checkbox'
          checked={parking}
          onChange={(e) => setParking(e.target.checked)}
        />
      </label>
      <br />

      <label>
        Breakfast:
        <input
          type='checkbox'
          checked={breakfast}
          onChange={(e) => setBreakfast(e.target.checked)}
        />
      </label>
      <br />

      <label>
        Pets:
        <input
          type='checkbox'
          checked={pets}
          onChange={(e) => setPets(e.target.checked)}
        />
      </label>
      <br />

      <label>
        Address:
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />

      <label>
        City:
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <br />

      <label>
        Zip:
        <input
          type='text'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </label>
      <br />

      <label>
        Country:
        <input
          type='text'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <br />

      <label>
        Continent:
        <input
          type='text'
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
        />
      </label>
      <br />

      <label>
        Latitude:
        <input
          type='number'
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
      </label>
      <br />

      <label>
        Longitude:
        <input
          type='number'
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
      </label>
      <br />

      <button type='submit'>Create Venue</button>
    </form>
  );
};

export default CreateVenueForm;
