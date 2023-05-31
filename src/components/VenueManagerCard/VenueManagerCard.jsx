import { Link, useNavigate } from 'react-router-dom';
import styles from './VenueManagerCard.module.scss';
import axios from 'axios';
import { useState } from 'react';

const VenueManagerCard = ({
  name,
  id,
  description,
  price,
  media,
  onDelete,
}) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      await axios.delete(
        `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Venue delete successful
      // You can redirect the user or show a success message here
      alert('Venue delete successful');
      onDelete(id); // Call the onDelete callback from the parent component
    } catch (error) {
      // Handle any network errors or server errors
      setError('Error: ' + error.response.data.message);
    }
  };

  console.log(error);
  return (
    <div className={styles.venueManagerCard_container}>
      <img src={media} alt='venue image' />
      <div className={styles.des}>
        <div className={styles.name}>
          <h2>{name}</h2>
          <Link to={`/venue/${id}`}>View Venue</Link>
        </div>
        <p>{description}</p>
        <p>{price}kr</p>
        <div className={styles.but}>
          <button className={styles.edit}>Edit</button>
          <button className={styles.delete} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueManagerCard;
