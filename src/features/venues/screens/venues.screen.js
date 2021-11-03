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
import { UserContext } from '../../../services/user/user.context';

export const VenueListComponent = ({ navigation }) => {
  const { venues } = useContext(VenuesContext);
  const renderItem = useCallback(({ item }) => {
    return <VenueListItem item={item} key={item.placeId} />;
  }, []);

  const keyExtractor = useCallback((item) => item.placeId + 'id', []);

  const VenueListItem = ({ item }) => (
    <Spacer position="bottom" size="large">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('VenueDetail', { item: item });
        }}
      >
        <VenueInfoCard venue={item} />
      </TouchableOpacity>
    </Spacer>
  );

  return (
    <VenueList
      data={venues}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export const VenuesScreen = ({ navigation }) => {
  const {
    venues,
    isLoading: isLoadingVenues,
    error,
  } = useContext(VenuesContext);

  const { isLoadingUser } = useContext(UserContext);

  return (
    <SafeArea>
      <ScreenBackground>
        <SearchBarComponent />
        <ListContainer>
          {isLoadingVenues || isLoadingUser ? (
            <ActivityIndicator
              animating={true}
              size="large"
              color={colors.ui.success}
            />
          ) : (
            <VenueListComponent navigation={navigation} />
          )}
        </ListContainer>
      </ScreenBackground>
    </SafeArea>
  );
};
