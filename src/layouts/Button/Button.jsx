import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ buttonText, to, gray }) => {
  return (
    <Link to={to} className={`${styles.button} ${gray && styles.gray}`}>
      {buttonText}
    </Link>
  );
};

export default Button;
