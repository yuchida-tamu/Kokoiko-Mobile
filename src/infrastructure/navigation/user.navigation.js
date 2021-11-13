import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import { UserScreen } from '../../features/user/screens/user.screen';
import { UserFavouritesScreen } from '../../features/user/screens/user-favourites.screen';
import { colors } from '../theme/colors';

const UserStack = createStackNavigator();

export const UserNavigator = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.bg.primary },
      }}
    >
      <UserStack.Screen name="User" component={UserScreen} />
      <UserStack.Screen
        name="UserFavourites"
        component={UserFavouritesScreen}
      />
    </UserStack.Navigator>
  );
};
