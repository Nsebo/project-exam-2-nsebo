import React, { useState } from 'react';
import loginImg from '../../assets/login-img.jpg';
import googleIcon from '../../assets/flat-color-icons_google.png';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://nf-api.onrender.com/api/v1/holidaze/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful login
        console.log(data);
      })
      .catch((error) => {
        // Handle login error
        setError(error.message);
      });
  };
  return (
    <main>
      <div className={styles.login_container}>
        <div className={styles.login_image}>
          <img src={loginImg} alt='login Image' />
        </div>
        <div className={styles.login_details}>
          <div className={styles.login_details_heading}>
            <h1 className={styles.login_title}>Welcome back, Cey</h1>
            <p className={styles.signup_title}>
              Welcome back! Please enter your details
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_body}>
              <div className={styles.email}>
                <label className='form__label' htmlFor='email'>
                  Email{' '}
                </label>
                <input
                  type='email'
                  id='email'
                  className={styles.form__input}
                  placeholder='Enter email'
                />
              </div>
              <div className='password'>
                <label className='form__label' htmlFor='password'>
                  Password{' '}
                </label>
                <input
                  className={styles.form__input}
                  type='password'
                  id='password'
                  placeholder='Enter Password'
                />
              </div>
              <div className={styles.forgot_password}>
                <p className=''>Remember for 30</p>
                <Link className=''>forget password?</Link>
              </div>
            </div>
            <div className={styles.btn}>
              <button type='submit' className={styles.submit_btn}>
                Log in
              </button>
            </div>
            <div className={styles.btn}>
              <button type='submit' className={styles.google_btn}>
                <img src={googleIcon} alt='google Icon' />
                Log in with google
              </button>
            </div>
            <div>
              <p className={styles.signup}>
                Don’t have an account?{' '}
                <Link to='/signup'>Sign up for free</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
