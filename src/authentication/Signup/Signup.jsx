import React, { useContext, useState } from 'react';
import signupImg from '../../assets/signup-img.jpg';
import googleIcon from '../../assets/flat-color-icons_google.png';
import styles from './Signup.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth-context';

const Signup = () => {
  const {
    name,
    email,
    avatar,
    venueManager,
    password,
    confirmPassword,
    setAvatar,
    setConfirmPassword,
    setEmail,
    setName,
    setVenueManager,
    handleSubmit,
    setPassword,
    errorMessage,
    signUpData,
  } = useContext(AuthContext);

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
                Became holidaze member, you’ll get exclusive offers from holidaze
              </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.form_body}>
                <div className={styles.username}>
                  <label className='form__label' htmlFor='name'>
                    Name:
                  </label>
                  <input
                      className={styles.form_input}
                      type='text'
                      id='name'
                      placeholder='Enter your name'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.email}>
                  <label className={styles.form_label} htmlFor='email'>
                    Email:
                  </label>
                  <input
                      type='email'
                      id='email'
                      className={styles.form_input}
                      placeholder='Enter email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.password}>
                  <label className={styles.form_label} htmlFor='password'>
                    Password:
                  </label>
                  <input
                      className={styles.form_input}
                      type='password'
                      id='password'
                      placeholder='Create a Password'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.confirm_password}>
                  <label className={styles.form_label} htmlFor='confirmPassword'>
                    Confirm Password:
                  </label>
                  <input
                      className={styles.form_input}
                      type='password'
                      id='confirmPassword'
                      placeholder='Confirm Password'
                      name='confirmPassword'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className={styles.Avatar}>
                  <label className={styles.form_label} htmlFor='avatar'>
                    Avatar:
                  </label>
                  <input
                      type='text'
                      name='avatarUrl'
                      id='avatar'
                      className={styles.form_input}
                      placeholder='Avatar URL'
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                  />
                </div>
                <div className={styles.venueManager}>
                  <label className={styles.form_label} htmlFor='venueManager'>
                    Venue Manager:
                    <input
                        type='checkbox'
                        checked={venueManager}
                        onChange={(e) => setVenueManager(e.target.checked)}
                    />
                  </label>
                </div>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              <div className={styles.btn}>
                <button type='submit' className={styles.submit_btn}>
                  Create an Account
                </button>
                <button type='submit' className={styles.google_btn}>
                  <img src={googleIcon} alt='Google Icon' />
                  Sign up with Google
                </button>
              </div>

              <div>
                <p className={styles.signup}>
                  Already have an account? <Link to='/login'>Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
  );
};

export default Signup;
