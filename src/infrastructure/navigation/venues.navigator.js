import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//screen
import { VenuesScreen } from '../../features/venues/screens/venues.screen';
import { VenueDetailScreen } from '../../features/venues/screens/venue-detail.screen';
import { colors } from '../theme/colors';
const VenuesStack = createStackNavigator();

const Detail = () => (
  <View>
    <Text>Detail</Text>
  </View>
);

export const VenuesNavigator = () => {
  return (
    <VenuesStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.bg.primary },
      }}
    >
      <VenuesStack.Screen name="Venues" component={VenuesScreen} />
      <VenuesStack.Screen name="VenueDetail" component={VenueDetailScreen} />
    </VenuesStack.Navigator>
  );
};
