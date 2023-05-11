import Button from '../../layouts/Button/Button';
import styles from './PictureCard.module.scss';

const PictureCard = ({ imgUrl }) => {
  return (
    <section className={styles.picture_card}>
      <img src={imgUrl} alt='' />
      <Button buttonText='View Details' border={true} />
    </section>
  );
};

export default PictureCard;
