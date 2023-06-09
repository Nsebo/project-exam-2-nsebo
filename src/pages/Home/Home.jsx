import styles from './Home.module.scss';
import Layout from '../../layouts/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import Location from '../../components/Location/Location';
import VenueCard from '../../components/VenueCard/VenueCard';
import Subscribe from '../../components/Subscribe/Subscribe';
import Venue from '../../components/Venue/Venue';
import { VenueContext } from '../../context/venue-context';
import { useContext } from 'react';
import Pictures from '../../components/Pictures/Pictures';
import Explore from '../../components/Explore/Explore';

const Home = () => {
  const { venues } = useContext(VenueContext);
  return (
    <div className={styles.home}>
      <Layout>
        <Hero />
        {venues && <Venue />}
        <Explore />
        <Subscribe />
      </Layout>
    </div>
  );
};

export default Home;
