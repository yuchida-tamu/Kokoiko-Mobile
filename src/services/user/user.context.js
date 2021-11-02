import { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUsername = (username) => {
    if (username !== user.username) setUser({ ...user, username });
  };

  const setEmail = (email) => {
    if (email !== user.email) setUser({ ...user, email });
  };

  const addFavourite = (favourite) => {
    // granted "favourite" is already validated before this method is invoked
    const favs = [...user.favourites, favourite];

    setUser({ ...user, favourites: favs });
  };

  const removeFavourite = (favourite) => {
    const favs = [...user.favourites];
    const updated = favs.filter((fav) => fav.id === favourite.id);

    setUser({ ...user, favourites: updated });
  };

  return (
    <UserContext.Provider
      value={(setUsername, setEmail, addFavourite, removeFavourite)}
    >
      {children}
    </UserContext.Provider>
  );
};