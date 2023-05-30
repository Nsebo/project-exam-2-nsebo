import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const VenueContext = createContext(null);

export const VenueProvider = ({ children }) => {
  const [venues, setVenues] = useState('');
  const [searchVenues, setSearchVenues] = useState('');

  useEffect(() => {
    axios
      .get('https://nf-api.onrender.com/api/v1/holidaze/venues')
      .then((res) => {
        setVenues(res.data);
        setSearchVenues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <VenueContext.Provider value={{ venues, setSearchVenues, searchVenues }}>
      {children}
    </VenueContext.Provider>
  );
};
