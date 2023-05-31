import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/login-context';
import axios from 'axios';

const Header = () => {
  const { data, handleLogout } = useContext(LoginContext);
  const [profile, setProfile] = useState(false);
  const [profileAvatarUrl, setProfileAvatarUrl] = useState(data?.avatar);
  const [modal, setModal] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState('');

  const handleAvatarChange = async () => {
    try {
      const name = data.name; // Replace with the actual profile name
      const accessToken = localStorage.getItem('accessToken');

      const response = await axios.put(
          `https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}/media`,
          { avatar: avatarUrl },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
      );

      console.log('Avatar changed:', response.data);
      setProfileAvatarUrl(avatarUrl);
      alert('Profile Avatar changed successfully');
      setModal(false);
      setAvatarUrl('');
      // You can handle the success response here, such as displaying a success message.
    } catch (error) {
      console.error('Avatar change failed:', error);
      alert('Avatar change failed:', error);
      // You can handle the error response here, such as showing an error message to the user.
    }
  };

  const handleInputChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  console.log(avatarUrl);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleProfile = () => {
    setProfile((prev) => !prev);
  };

  return (
      <>
        <header className={styles.header_container}>
          <Link to='/' className={styles.logo}>
            <h1 className={styles.header_logo}>Holidaze</h1>
          </Link>
          <nav className={styles.nav_container}>
            <ul className={styles.ul}>
              <Link to='/venues'>Explore</Link>
              {data?.venueManager ? (
                  <Link to='/my-venues'>My Venues</Link>
              ) : (
                  <Link to='/my-bookings'>My Bookings</Link>
              )}
            </ul>
          </nav>
          {data?.accessToken ? (
              <div className={styles.profile} onClick={handleProfile}>
                <p>Hello {data?.name}</p>
                <img src={profileAvatarUrl} alt='avatar' />
                {profile && (
                    <div className={styles.profile_change}>
                      <p>
                        <strong>
                          {data?.venueManager ? 'Venue Manager' : 'User'}
                        </strong>
                      </p>
                      <p onClick={handleModal}>Change Avatar</p>
                      <div className={styles.actions}>
                        {data?.venueManager ? (
                            <Link to='/create-venues'>Create Venue</Link>
                        ) : (
                            <Link to='/my-bookings'>My Bookings</Link>
                        )}
                        <button onClick={handleLogout}>Logout</button>
                      </div>
                    </div>
                )}
              </div>
          ) : (
              <div className={styles.btn}>
                <Button buttonText='Login' to='/login' />
                <Button buttonText='Sign Up' to='/signup' gray={true} />
              </div>
          )}
        </header>
        {modal && (
            <>
              <div className={styles.overlay} onClick={handleModal} />
              <div className={styles.modal}>
                <h3>Change Avatar URL</h3>
                <label>
                  Avatar URL:
                  <input
                      type='text'
                      value={avatarUrl}
                      onChange={handleInputChange}
                      required
                  />
                </label>
                <button onClick={handleAvatarChange}>Change Avatar</button>
              </div>
            </>
        )}
      </>
  );
};

export default Header;
