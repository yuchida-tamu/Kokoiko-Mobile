import { createStackNavigator } from '@react-navigation/stack';
import { UserScreen } from '../../features/user/screens/user.screen';
import { UserFavouritesScreen } from '../../features/user/screens/user-favourites.screen';

const UserStack = createStackNavigator();

export const UserNavigator = () => {
  return (
    <UserStack.Navigator headerMode="none">
      <UserStack.Screen name="User" component={UserScreen} />
      <UserStack.Screen
        name="UserFavourites"
        component={UserFavouritesScreen}
      />
    </UserStack.Navigator>
  );
};
