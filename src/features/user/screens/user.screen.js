import { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import View from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';
import { useCallback } from 'react/cjs/react.development';
import { SafeArea } from '../../../components/utilities/safe-area.component';
import { UserContext } from '../../../services/user/user.context';

export const UserScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);

  const navigateToFavouritesHandler = useCallback(() => {
    navigation.navigate('UserFavourites');
  }, []);

  return (
    <SafeArea>
      <View>
        <View></View>
        <Text>{user.username}</Text>
      </View>
      <TouchableOpacity onPress={navigateToFavouritesHandler}>
        <View>
          <Text>Favourites</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Text>Logout</Text>
        </View>
      </TouchableOpacity>
    </SafeArea>
  );
};
