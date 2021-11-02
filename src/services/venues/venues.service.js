import { mocks, mockImages } from './mock'; //mock data for development purposes
import camelize from 'camelize';

//prepareRandomizedMockPhoto will insert uri of a random mock image into each object element
export const prepareRandomizedMockPhoto = (results = []) => {
  return results.map((venue) => {
    venue.photos = [
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
    ];

    return venue;
  });
};

//transformRawVeneus will format the data to camel cased format
export const formatVenuesResults = (results = []) => {
  return camelize(results);
};

//transformVenues will transform data by adding necessary properties to each element
export const transformVenues = (results = []) => {
  return results.map((venue) => {
    return {
      ...venue,
      isOpenNow: venue.opening_hours && venue.opening_hours.open_now,
      address: venue.vicinity,
      isClosedTemporarily: venue.business_status === 'CLOSED_TEMPORARILY',
      id: venue.place_id, //this is temporary
    };
  });
};

//requestVenuesbyLocation will handle API request results of venue search based on location
export const requestVenuesByLocation = (location) => {
  return new Promise((resolve, reject) => {
    //Only for DEVELOPMENT: [keyword] is a string of lat & lng
    //NOTE: Eventually this app should search places based on keywords as well
    const data = mocks[location]; //DELETE for Production

    if (!data) reject('venues not found');
    resolve(data.results);
  });
};

//requestVenuesByKeywords will return API request results of venue search based on keyword
//export const requestVenuesByKeywords = (keywords) => {};
