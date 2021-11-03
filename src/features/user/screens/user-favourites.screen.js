import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeArea } from '../../../components/utilities/safe-area.component';
import {
  ListContainer,
  VenueList,
} from '../../venues/components/venues-styles.component';

import { Spacer } from '../../../components/spacer/spacer.component';
import { VenueInfoCard } from '../../venues/components/venue-info-card.component';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../services/user/user.context';

const FavouriteList = ({ navigate }) => {
  const { user } = useContext(UserContext);

  const renderItem = useCallback(({ item }) => {
    return <VenueListItem item={item} key={item.placeId} />;
  }, []);

  const keyExtractor = useCallback((item) => item.placeId + 'id', []);

  const onPress = useCallback((item) => {
    navigate('VenueDetail', { item: item });
  }, []);

  const VenueListItem = ({ item }) => (
    <Spacer position="bottom" size="large">
      <TouchableOpacity onPress={() => onPress(item)}>
        <VenueInfoCard venue={item} />
      </TouchableOpacity>
    </Spacer>
  );

  return (
    <VenueList
      data={[...user.favourites.getValue()]}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export const UserFavouritesScreen = ({ route }) => {
  return (
    <SafeArea>
      <ListContainer>
        <FavouriteList navigate={route.params.navigate} />
      </ListContainer>
    </SafeArea>
  );
};
