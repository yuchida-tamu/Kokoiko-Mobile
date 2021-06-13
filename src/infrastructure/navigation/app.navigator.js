import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { VenuesScreen } from "../../features/venues/screens/venues.screen";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Venues: "md-home-outline",
  Map: "md-map",
  Favourites: "md-heart",
  User: "person-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const UserScreen = () => <Text>UserScreen</Text>;
const FavouritesScreen = () => <Text>FavouritesScreen</Text>;
const MapScreen = () => <Text>MapScreen</Text>;

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        style: {
          backgroundColor: colors.bg.secondary,
          borderTopWidth: 0,
          borderTopColor: "transparent",
        },
        activeTintColor: colors.ui.primary,
      }}
    >
      <Tab.Screen name="Venues" component={VenuesScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};
