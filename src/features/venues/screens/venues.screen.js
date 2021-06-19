import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
//context
import { VenuesContext } from "../../../services/venues/venues.context";
import { LocationContext } from "../../../services/location/location.context";
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
  const {
    venues,
    isLoading: isLoadingVenues,
    error,
  } = useContext(VenuesContext);
  const {
    keyword,
    location,
    isLoading: isLoadingLocation,
    search,
  } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onChangeSearchKeywordHandler = (input) => setSearchKeyword(input);

  return (
    <SafeArea>
      <ScreenBackground>
        <SearchBarContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearchKeywordHandler}
            onSubmitEditing={() => {
              search(searchKeyword);
            }}
            value={searchKeyword}
          />
        </SearchBarContainer>
        <ListContainer>
          {isLoadingVenues ? (
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
