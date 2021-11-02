import mockUser from './mock/user.mock.json';
import camelize from 'camelize';

export const formatUserResult = (user = []) => {
  return camelize(user);
};

export const requestUser = () => {
  return new Promise((resolve, reject) => {
    const user = mockUser;
    // const user = await axios.get ~
    if (!user) reject('user not found');
    resolve(user);
  });
};
