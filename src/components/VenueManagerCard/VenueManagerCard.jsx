import { Link } from 'react-router-dom';
import styles from './VenueManagerCard.module.scss';
import Button from '../../layouts/Button/Button';

const VenueManagerCard = () => {
  return (
    <div>
      <img src='' alt='' />
      <div className={styles.name}>
        <h2>Name</h2>
        <Link>View Venue</Link>
      </div>
      <p>Description</p>
      <p>Price</p>
      <div className={styles.but}>
        <Button buttonText='Edit' />
        <Button buttonText='Delete' />
      </div>
    </div>
  );
};

export default VenueManagerCard;
