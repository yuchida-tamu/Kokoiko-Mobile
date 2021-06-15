import React, { useContext } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
//context
import { VenuesContext } from "../../../services/venues/venues.context";
//component
import { VenueInfoCard } from "../components/venue-info-card.component";
import {
  ScreenBackground,
  SearchBarContainer,
  Searchbar,
  VenueList,
  ListContainer,
} from "../components/venues-styles.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
//infra
import { colors } from "../../../infrastructure/theme/colors";

export const VenuesScreen = () => {
  const { venues, isLoading, error } = useContext(VenuesContext);

  return (
    <SafeArea>
      <ScreenBackground>
        <SearchBarContainer>
          <Searchbar placeholder="Search" />
        </SearchBarContainer>
        <ListContainer>
          {isLoading ? (
            <ActivityIndicator
              animating={true}
              size="large"
              color={colors.ui.success}
            />
          ) : (
            <VenueList
              data={venues}
              renderItem={(venue) => (
                <Spacer position="bottom" size="large">
                  <VenueInfoCard venue={venue.item} />
                </Spacer>
              )}
              keyExtractor={(item) => item.name + "id"}
            />
          )}
        </ListContainer>
      </ScreenBackground>
    </SafeArea>
  );
};
