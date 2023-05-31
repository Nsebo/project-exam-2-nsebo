import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ buttonText, to, gray, border, width }) => {
  return (
    <Link
      to={to}
      className={`${styles.button} ${gray && styles.gray} ${
        width && styles.width
      } ${border && styles.border}`}
    >
      {buttonText}
    </Link>
  );
};

export default Button;
