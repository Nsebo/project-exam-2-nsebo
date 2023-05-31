import styles from './VenueCard.module.scss';
import bed from '../../assets/bed.png';
import bath from '../../assets/bath.png';
import Button from '../../layouts/Button/Button';

const VenueCard = ({ name, imgUrl, price, id }) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt='room' className={styles.venue_img} />
      <div className={styles.card_body}>
        <h2>{name}</h2>
        <p>
          <span>March 12 - </span>
          <span>March 21</span>
        </p>
        <div className={styles.space}>
          <p>
            <img src={bed} alt='bed' /> 4 Beds
          </p>
          <p>
            <img src={bath} alt='bath' /> 4 Baths
          </p>
        </div>
        <h3>${price}/Night</h3>
        <div className={styles.buttons}>
          <Button buttonText='View Details' border={true} to={`/venue/${id}`} />
          <Button buttonText='Book Now' gray={true} />
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
