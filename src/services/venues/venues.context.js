import React, { createContext, useState, useEffect, useContext } from 'react';
//services
import {
  prepareRandomizedMockPhoto,
  formatVenuesResults,
  requestVenuesByLocation,
  transformVenues,
} from './venues.service';
//context
import { LocationContext } from '../location/location.context';

export const VenuesContext = createContext();

export const VenuesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [venues, setVenues] = useState(null);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const fetchVenuesByLocation = (loc) => {
    //indicate the beginning of loading
    setIsLoading(true);
    //clear the existing state
    setVenues([]);
    //Set timeout to reproduce the loading latency: ONLY FOR DEVELOPMENT
    setTimeout(() => {
      requestVenuesByLocation(loc)
        .then(prepareRandomizedMockPhoto) // ONLY FOR DEVELOPMENT: DELETE LATER
        .then(transformVenues)
        .then(formatVenuesResults)
        .then((results) => {
          //update the venues state with the results

          setVenues(results);
          //indicate the end of loading
          setIsLoading(false);
        })
        .catch((e) => {
          //update the error state with the detected error
          setError(e);
          //indicate the end of loading
          setIsLoading(false);
        });
    }, 2000);
  };
  //run the fetch request when "location" changes
  useEffect(() => {
    if (location) {
      const locationStr = `${location.lat},${location.lng}`;
      fetchVenuesByLocation(locationStr);
    }
  }, [location]);

  return (
    <VenuesContext.Provider value={{ isLoading, error, venues }}>
      {children}
    </VenuesContext.Provider>
  );
};
