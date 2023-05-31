import React, { useContext, useState } from 'react';
import loginImg from '../../assets/login-img.jpg';
import googleIcon from '../../assets/flat-color-icons_google.png';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../../context/login-context';
import { AuthContext } from '../../context/auth-context';

const Login = () => {
  const {
    email,
    password,
    errorMessage,
    setEmail,
    data,
    setPassword,
    handleLoginSubmit,
  } = useContext(LoginContext);
  const { signUpData } = useContext(AuthContext);
  return (
    <main>
      <div className={styles.login_container}>
        <div className={styles.login_image}>
          <img src={loginImg} alt='login Image' />
        </div>
        <div className={styles.login_details}>
          <Link to='/'>&rarr;</Link>
          <div className={styles.login_details_heading}>
            <h1 className={styles.login_title}>
              Welcome back, {signUpData.name}
            </h1>
            <p className={styles.signup_title}>
              Welcome back! Please enter your details
            </p>
          </div>
          <form className={styles.form} onSubmit={handleLoginSubmit}>
            <div className={styles.form_body}>
              <div className={styles.email}>
                <label className='form__label' htmlFor='email'>
                  Email{' '}
                </label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.form__input}
                  placeholder='Enter email'
                />
              </div>
              <div className='password'>
                <label className='form__label' htmlFor='password'>
                  Password{' '}
                </label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.form__input}
                  placeholder='Enter Password'
                  required
                />
              </div>
              <div className={styles.forgot_password}>
                <p className=''>Remember for 30</p>
                <Link className=''>forget password?</Link>
              </div>
            </div>
            {errorMessage && <p>{errorMessage}</p>}
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
                <Link to='/signup'> Sign up for free</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
