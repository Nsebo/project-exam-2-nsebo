import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [venueManager, setVenueManager] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [signUpData, setSignUpData] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !avatar || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post(
        'https://nf-api.onrender.com/api/v1/holidaze/auth/register',
        {
          name,
          email,
          avatar,
          venueManager,
          password,
        }
      );
      setSignUpData(response.data);
      console.log('Signup successful:', response.data);
      // You can handle the success response here, such as showing a success message or redirecting the user.
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      setErrorMessage('Failed to sign up. Please try again.');
      // You can handle the error response here, such as showing an error message to the user.
    }
  };
  return (
    <AuthContext.Provider
      value={{
        name,
        email,
        avatar,
        venueManager,
        password,
        confirmPassword,
        setAvatar,
        setConfirmPassword,
        setEmail,
        setErrorMessage,
        setName,
        setVenueManager,
        handleSubmit,
        setPassword,
        errorMessage,
        signUpData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
