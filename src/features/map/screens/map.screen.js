import React, { useContext, useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';
//context
import { LocationContext } from '../../../services/location/location.context';
import { VenuesContext } from '../../../services/venues/venues.context';
//components
import { SafeArea } from '../../../components/utilities/safe-area.component';
import { SearchBarComponent } from '../../../components/searchbar/searchbar.component';
import { MapCallout } from '../components/map-callout.component';
//utils
import { Geolocation } from '../../../utils/geolocation';
import { colors } from '../../../infrastructure/theme/colors';

const StyledMap = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { venues = [] } = useContext(VenuesContext);
  const { location } = useContext(LocationContext);
  const { viewport } = location;
  const [currentPosition, setCurrentPosition] = useState(null);
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    //ask for permission-
    const updateCurrentPosition = async () => {
      const { latitude, longitude } = await Geolocation.getGPSLocation();
      setCurrentPosition({ latitude, longitude });
    };
    updateCurrentPosition();
  }, []);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  const renderMarkers = venues.map((v, i) => {
    return (
      <Marker
        key={v.name + i}
        title={v.name}
        coordinate={{
          latitude: v.geometry.location.lat,
          longitude: v.geometry.location.lng,
        }}
      >
        <Callout>
          <MapCallout venue={v} />
        </Callout>
      </Marker>
    );
  });

  const renderCurrentPositionMarker = currentPosition ? (
    <Marker
      key="currentPosition"
      title="Your Location"
      coordinate={{
        latitude: currentPosition.latitude,
        longitude: currentPosition.longitude,
      }}
    />
  ) : null;

  return (
    <SafeArea>
      <SearchBarComponent />
      {!currentPosition ? (
        <ActivityIndicator
          animating={true}
          size="large"
          color={colors.ui.success}
        />
      ) : (
        <StyledMap
          showCompass={false}
          region={{
            latitude: currentPosition?.latitude ?? location.latitude,
            longitude: currentPosition?.longitude ?? location.longitude,
            latitudeDelta: latDelta,
            longitudeDelta: 0.0421,
          }}
        >
          {renderMarkers}
          {renderCurrentPositionMarker}
        </StyledMap>
      )}
    </SafeArea>
  );
};
