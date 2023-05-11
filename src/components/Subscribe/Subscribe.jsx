import styles from './Subscribe.module.scss';

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <h3>
        Subscribe to get the latest
        <br /> news about us.
      </h3>
      <p>Subscribe to get notified about special offers and news</p>
      <p>Enter your email below to get our weekly update updates</p>
      <form action=''>
        <input
          type='text'
          name=''
          id=''
          placeholder='Enter Your E-mail Address'
        />
        <button>Subscribe</button>
      </form>
    </section>
  );
};

export default Subscribe;
