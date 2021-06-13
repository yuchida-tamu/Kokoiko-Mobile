import React from "react";
import { FlatList } from "react-native";
//component
import { VenueInfoCard } from "../components/venue-info-card.component";
import {
  ScreenBackground,
  SearchBarContainer,
  Searchbar,
  VenueList,
} from "../components/venues-styles.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const VenuesScreen = () => {
  return (
    <SafeArea>
      <ScreenBackground>
        <SearchBarContainer>
          <Searchbar placeholder="Search" />
        </SearchBarContainer>
        <VenueList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <VenueInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name + "id"}
        />
      </ScreenBackground>
    </SafeArea>
  );
};
