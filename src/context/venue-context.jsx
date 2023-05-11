import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const VenueContext = createContext(null);

export const VenueProvider = ({ children }) => {
  const [venues, setVenues] = useState('');

  useEffect(() => {
    axios
        .get('https://nf-api.onrender.com/api/v1/holidaze/venues')
        .then((res) => {
          setVenues(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  console.log(venues);
  console.log(venues.slice(0, 3));

  return (
      <VenueContext.Provider value={{ venues }}>{children}</VenueContext.Provider>
  );
};
