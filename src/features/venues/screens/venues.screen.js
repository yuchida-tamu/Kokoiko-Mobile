import React, { useCallback, useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
//context
import { VenuesContext } from '../../../services/venues/venues.context';
//component
import { VenueInfoCard } from '../components/venue-info-card.component';
import {
  ScreenBackground,
  VenueList,
  ListContainer,
} from '../components/venues-styles.component';
import { SafeArea } from '../../../components/utilities/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SearchBarComponent } from '../../../components/searchbar/searchbar.component';
//infra
import { colors } from '../../../infrastructure/theme/colors';

const VenueListItem = ({ item }) => (
  <Spacer position="bottom" size="large">
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('VenueDetail', { item: item.item });
      }}
    >
      <VenueInfoCard venue={item.item} />
    </TouchableOpacity>
  </Spacer>
);

export const VenuesScreen = ({ navigation }) => {
  const {
    venues,
    isLoading: isLoadingVenues,
    error,
  } = useContext(VenuesContext);

  const renderItem = useCallback(
    ({ item }) => <VenueListItem item={item} key={item.id} />,
    []
  );

  const keyExtractor = useCallback((item) => item.name + 'id', []);

  return (
    <SafeArea>
      <ScreenBackground>
        <SearchBarComponent />
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
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          )}
        </ListContainer>
      </ScreenBackground>
    </SafeArea>
  );
};
