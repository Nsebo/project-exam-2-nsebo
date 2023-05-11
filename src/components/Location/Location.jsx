import styles from './Location.module.scss';
import mapIcon from '../../assets/map-pin.svg';
import calenderIcon from '../../assets/calendar.svg';
import userIcon from '../../assets/user.svg';
import searchIcon from '../../assets/search.svg';

const Location = () => {
  return (
    <form className={styles.heroBanner}>
      <div className={styles.tab}>
        <span className={styles.mapIcon}>
          <img src={mapIcon} alt='map icon' />
        </span>
        <input
          type='text'
          name='text'
          className={styles.name}
          id='text'
          placeholder='Where are you going?'
        />
      </div>
      <div className={styles.tab}>
        <span>
          <img src={calenderIcon} alt='map icon' />
        </span>
        <input
          type='text'
          name='text'
          className={styles.name}
          id='text'
          placeholder='Check in date - Check out date'
        />
      </div>
      <div className={styles.tab}>
        <span>
          <img src={userIcon} alt='user icon' />
        </span>
        <input
          type='text'
          name='text'
          className={styles.name}
          id='text'
          placeholder='1 adult. 0 children . 1 room'
        />
      </div>
      <div className={styles.search}>
        <span>
          <img src={searchIcon} alt='search icon' />
        </span>
        <input
          type='search'
          name='text'
          className={styles.search}
          id='text'
          placeholder='Search'
        />
      </div>
    </form>
  );
};

export default Location;
