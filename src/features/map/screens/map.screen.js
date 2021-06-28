import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
//context
import { LocationContext } from "../../../services/location/location.context";
import { VenuesContext } from "../../../services/venues/venues.context";
//components
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { SearchBarComponent } from "../../../components/searchbar/searchbar.component";
import { MapCallout } from "../components/map-callout.component";

const StyledMap = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { venues = [] } = useContext(VenuesContext);
  const { location } = useContext(LocationContext);
  const { viewport } = location;
  const [latDelta, setLatDelta] = useState(0);

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

  return (
    <SafeArea>
      <SearchBarComponent />
      <StyledMap
        showCompass={false}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.0421,
        }}
      >
        {renderMarkers}
      </StyledMap>
    </SafeArea>
  );
};
