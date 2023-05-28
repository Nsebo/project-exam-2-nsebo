import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ buttonText, to, gray,  white, border, width }) => {
  return (
    <Link
      to={to}
      className={`${styles.button} ${gray && styles.gray}  ${white && styles.white} ${
          width && styles.width
      } ${
        border && styles.border
      }`}
    >
      {buttonText}
    </Link>
  );
};

export default Button;
