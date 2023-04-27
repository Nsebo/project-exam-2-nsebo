import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
