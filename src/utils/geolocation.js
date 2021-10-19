import * as Location from 'expo-location';
export class Geolocation {
  static getGPSLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});

      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
    } else {
      console.log('Permission not granted');
    }
  };
}
