import React, { useState } from 'react';
import signupImg from '../../assets/signup-img.jpg';
import googleIcon from '../../assets/flat-color-icons_google.png';
import styles from './Signup.module.scss';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };

    fetch('https://nf-api.onrender.com/api/v1/holidaze/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <div className={styles.signup_container}>
        <div className={styles.signup_image}>
          <img src={signupImg} alt='Signup Image' />
        </div>
        <div className={styles.signup_details}>
          <div className={styles.signup_details_heading}>
            <h1 className={styles.signup_title}>Create an Account</h1>
            <p className={styles.signup_para}>
              Became holidaze member ,you’ll get exlusive offers from holidaze
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_body}>
              <div className={styles.username}>
                <label className='form__label' htmlFor='name'>
                  Name{''}{' '}
                </label>
                <input
                  className={styles.form_input}
                  type='text'
                  id='name'
                  placeholder='Enter your name'
                />
              </div>
              <div className={styles.email}>
                <label className={styles.form_label} htmlFor='email'>
                  Email{''}{' '}
                </label>
                <input
                  type='email'
                  id='email'
                  className={styles.form_input}
                  placeholder='Enter email'
                />
              </div>
              <div className={styles.password}>
                <label className={styles.form_label} htmlFor='password'>
                  Password{''}{' '}
                </label>
                <input
                  className={styles.form_input}
                  type='password'
                  id='password'
                  placeholder='Create a Password'
                />
              </div>
              <div className={styles.confirm_password}>
                <label className={styles.form_label} htmlFor='confirmPassword'>
                  Confirm Password {''}
                </label>
                <input
                  className={styles.form_input}
                  type='password'
                  id='confirmPassword'
                  placeholder='Confirm Password'
                />
              </div>
              <div className={styles.Avatar}>
                <label className={styles.form_label} htmlFor='avatar'>
                  Avatar{''}
                </label>
                <input
                  type='avatar'
                  name='avatar'
                  id='avatar'
                  className={styles.form_input}
                  placeholder='Avatar url'
                />
              </div>
            </div>
            <div className={styles.btn}>
              <button type='submit' className={styles.submit_btn}>
                Create an Account
              </button>
              <button type='submit' className={styles.google_btn}>
                <img src={googleIcon} alt='google Icon' />
                Sign up with Google
              </button>
            </div>

            <div>
              <p className={styles.signup}>
                Already have an account?{''}<Link to="/login">log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
