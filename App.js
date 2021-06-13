import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
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
import { Navigation } from "./src/infrastructure/navigation";

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
        <Navigation />
      </ThemeProvider>
      <ExpoStatusBar style="light" />
    </>
  );
}
