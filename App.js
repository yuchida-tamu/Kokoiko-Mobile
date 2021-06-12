import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
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

export default function App() {
  //load google fonts
  const [archivoLoaded] = useArchivo({
    Archivo_400Regular,
  });
  const [montserratLoaded] = useMontserrat({
    Montserrat_400Regular,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <VenuesScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
