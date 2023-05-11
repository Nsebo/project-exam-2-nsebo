import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ buttonText, to, gray, border }) => {
  return (
    <Link
      to={to}
      className={`${styles.button} ${gray && styles.gray} ${
        border && styles.border
      }`}
    >
      {buttonText}
    </Link>
  );
};

export default Button;
