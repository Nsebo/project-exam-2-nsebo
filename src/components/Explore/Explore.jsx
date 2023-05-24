import styles from './Explore.module.scss';
import mountain from '../../assets/mountain.png';
import art from '../../assets/art.png';
import beach from '../../assets/beach.png';
import outdoor from '../../assets/outdoor.png';

const Explore = () => {
  return (
    <div className={styles.explore}>
      <h2>Browse by Type</h2>
      <section className={styles.explore_container}>
        <div className={styles.mountain}>
          <img src={mountain} alt='mountain' />
          <div className={styles.details}>
            <h3>Mountain Adventure</h3>
            <p>12,345 offer</p>
          </div>
        </div>
        <div className={styles.beach}>
          <img src={beach} alt='beach' />
          <div className={styles.details}>
            <h3>Beach Destinations</h3>
            <p>12,345 offer</p>
          </div>
        </div>
        <div className={styles.art}>
          <img src={art} alt='art' />
          <div className={styles.details}>
            <h3>Art & culture</h3>
            <p>12,345 offer</p>
          </div>
        </div>
        <div className={styles.outdoor}>
          <img src={outdoor} alt='outdoor' />
          <div className={styles.details}>
            <h3>Outdoor adventures</h3>
            <p>12,345 offer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
