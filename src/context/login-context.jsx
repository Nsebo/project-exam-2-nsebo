import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // User is already logged in
      // You can perform necessary actions here, such as fetching user data or redirecting to the logged-in state
      console.log('User is logged in');
    }
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post(
        'https://nf-api.onrender.com/api/v1/holidaze/auth/login',
        {
          email,
          password,
        }
      );

      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);

      setData(response.data);
      navigate('/');

      console.log('Login successful:', response.data);
      // You can handle the success response here, such as storing the authentication token or redirecting the user.
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid email or password. Please try again.');
      // You can handle the error response here, such as showing an error message to the user.
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    // Perform any necessary actions for logging out
    // For example, redirect to the login page
    navigate('/login');
  };

  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        errorMessage,
        setEmail,
        data,
        setPassword,
        handleLoginSubmit,
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
