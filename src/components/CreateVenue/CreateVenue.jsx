import styles from './CreateVenue.module.scss';
import camera from '../../assets/camera.png';
import fileText from '../../assets/file-text.png';
import mapPin from '../../assets/map-pin.png';
import home from '../../assets/home.svg';
import { useContext, useState } from 'react';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import axios from 'axios';
import { LoginContext } from '../../context/login-context';
import { useNavigate } from 'react-router-dom';

const CreateVenue = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState(['']);
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

  const { data } = useContext(LoginContext);

  const token = data.accessToken;
  console.log(token);

  const handleSubmit = async (e) => {
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
    const deta = {
      name,
      description,
      media: [media],
      price: parseInt(price),
      maxGuests: parseInt(maxGuests),
      rating: parseInt(rating),
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
      const response = await axios.post(
          'https://nf-api.onrender.com/api/v1/holidaze/venues',
          deta,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );

      if (response?.data) {
        window.alert('venue created successful');
        navigate('/my-venues');

        // Venue creation successful
        // You can redirect the user or show a success message here
        console.log('Venue creation successful');
      } else {
        // Venue creation failed
        // You can handle the error and display an appropriate message
        setError('Venue creation failed');
      }
    } catch (error) {
      // Handle any network errors
      setError('Error: ' + error.message);
    }
  };

  return (
      <>
        <Header />
        <section className={styles.createVenue_container}>
          <h1>Create a Venue</h1>
          <p>Enter Venue Details</p>
          <form onSubmit={handleSubmit}>
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
              ZIP:
              <input
                  type='text'
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                  placeholder='Enter Venue Postal Code'
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
                  onChange={(e) => setLat(e.target.value)}
                  required
                  placeholder='Enter Venue Latitude'
              />
            </label>
            <label>
              Longitude:
              <input
                  type='number'
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                  required
                  placeholder='Enter Venue Longitude'
              />
            </label>
            {error && <p>{error}</p>}
            <button type='submit' className={styles.create_button}>
              Create Venue
            </button>
          </form>
        </section>
        <Footer />
      </>
  );
};

export default CreateVenue;
