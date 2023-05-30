import styles from './Location.module.scss';
import searchIcon from '../../assets/search.svg';

const Location = () => {
    return (
        <form className={styles.heroBanner}>
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
