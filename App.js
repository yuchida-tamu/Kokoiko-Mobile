import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { VenuesScreen } from "./src/features/venues/screens/venues.screen";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useArchivo,
  Archivo_400Regular,
} from "@expo-google-fonts/archivo";
import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
//infrastructure
import { theme } from "./src/infrastructure/theme";
import { colors } from "./src/infrastructure/theme/colors";

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

export default function App() {
  //load google fonts
  const [archivoLoaded] = useArchivo({
    Archivo_400Regular,
  });
  const [montserratLoaded] = useMontserrat({
    Montserrat_400Regular,
  });
  if (!archivoLoaded || !montserratLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
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
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="light" />
    </>
  );
}
