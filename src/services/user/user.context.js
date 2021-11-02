import React, { createContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { requestUser } from './user.service';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  const setUsername = (username) => {
    if (username !== user.username) setUser({ ...user, username });
  };

  const setEmail = (email) => {
    if (email !== user.email) setUser({ ...user, email });
  };

  const addFavourite = (favourite) => {
    // granted "favourite" is already validated before this method is invoked
    const favs = new Set([...user.favourites]);
    console.log('before', favs);

    favs.add(favourite);
    console.log(favs);
    setUser({ ...user, favourites: favs });
  };

  const removeFavourite = (favourite) => {
    const favs = new Set([...user.favourites]);
    favs.delete(favourite);

    setUser({ ...user, favourites: favs });
  };

  const isFavourite = (id, list) => {
    return list.has(id);
  };

  const fetchUser = () => {
    setIsLoadingUser(true);

    setTimeout(() => {
      requestUser()
        .then((user) => {
          setUser({
            ...user,
            favourites:
              user.favourites > 0 ? new Set([...user.favourites]) : new Set(),
          });
        })
        .catch((err) => console.error(err));
    }, 2000);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUsername,
        setEmail,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
