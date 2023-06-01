import { useContext, useEffect, useState } from 'react';
import styles from './BookingCard.module.scss';
import { LoginContext } from '../../context/login-context';
import axios from 'axios';

const BookingCard = ({ dateFrom, dateTo, venue }) => {
  const [owners, setOwners] = useState('');
  const { data } = useContext(LoginContext);
  const accessToken = localStorage.getItem('accessToken');
  const { name: ownerName, email, avatar } = owners;

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const response = await axios.get(
          `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}?_owner=true`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setOwners(response.data.owner);
        console.log('Data:', response.data.owner);
      } catch (error) {
        console.error('Error fetching Owner:', error);
      }
    };

    if (accessToken) {
      fetchOwners();
    }
  }, [accessToken]);

  const isoCreatedDateString = dateFrom;
  const isoUpdatedDateString = dateTo;
  const createdDate = new Date(isoCreatedDateString);
  const updatedDate = new Date(isoUpdatedDateString);

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedCreatedDate = formatter.format(createdDate);
  const formattedUpdatedDate = formatter.format(updatedDate);
  console.log(formattedCreatedDate);
  console.log(formattedUpdatedDate);

  const { name, media, description, id } = venue;
  return (
    <div className={styles.booking_container}>
      <div className={styles.booking_details}>
        <div className={styles.name}>
          <h2>{name}</h2>
          <p>
            Venue is hosted by <strong> {ownerName}</strong>
          </p>
          <small>
            <img src={avatar} alt="owner's avatar" /> {email}
          </small>
        </div>
        <div className={styles.dates}>
          <div className={styles.check}>
            <p>{formattedCreatedDate}</p>
            <p>{formattedUpdatedDate}</p>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <div className={styles.booking_image}>
        <img src={media[0]} alt='media' />
      </div>
    </div>
  );
};

export default BookingCard;
