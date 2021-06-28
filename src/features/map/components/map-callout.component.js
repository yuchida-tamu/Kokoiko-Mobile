import React from "react";
import { CompactVenueCard } from "../../../components/venue/compact-venue.component";

export const MapCallout = ({ venue }) => (
  <CompactVenueCard isMap venue={venue} />
);
