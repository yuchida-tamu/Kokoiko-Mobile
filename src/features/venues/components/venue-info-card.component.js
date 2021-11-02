import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Card } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
//components
import {
  VenueCardContainer,
  InfoContainer,
  Row,
  Title,
  IconHeart,
  IconHeartFill,
  BodyText,
  AvailabilityIconContainer,
} from '../components/venues-styles.component';
import { Divider } from '../../../components/utilities/divider.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { useCallback, useEffect, useState } from 'react/cjs/react.development';
import { UserContext } from '../../../services/user/user.context';

export const VenueInfoCard = ({ venue = {} }) => {
  const {
    name = 'Sample Gallery',
    address = '1600 sample street',
    rating = 4.5,
    photos = [
      'https://www.wantedinrome.com/i/preview/storage/uploads/2020/12/Galleria_Varsi.jpg',
    ],
    isOpen = true,
    isClosedTemporarily = false,
    placeId,
    id = 'sampleId',
  } = venue;

  const [isFill, setIsFill] = useState(false);
  const { addFavourite, removeFavourite, isFavourite, user } =
    useContext(UserContext);

  const addToFavouritesHandler = () => {
    addFavourite(venue.id);
  };

  const removeFromFavouritesHandler = () => {
    removeFavourite(venue.id);
  };

  useEffect(() => {
    const isFav = isFavourite(venue.id, user.favourites);

    setIsFill(isFav);
  }, [venue.id, user.favourites, setIsFill]);

  return (
    <VenueCardContainer elevation={15}>
      <BlurView intensity={75} tint="dark">
        <Card.Cover source={{ uri: photos[0] }} />
        <InfoContainer>
          <Row>
            <Title>{name}</Title>
            {!isFill ? (
              <TouchableOpacity onPress={addToFavouritesHandler}>
                <IconHeart />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={removeFromFavouritesHandler}>
                <IconHeartFill />
              </TouchableOpacity>
            )}
          </Row>
          <Divider />

          <BodyText>{address}</BodyText>
          <Spacer position="bottom" size="medium" />
          <AvailabilityIconContainer>
            {isOpen ? (
              <>
                <Spacer position="right" size="medium">
                  <FontAwesome5 name="door-open" size={16} color="#18D8CD" />
                </Spacer>

                <BodyText>OPEN</BodyText>
              </>
            ) : (
              <>
                <Spacer position="right" size="medium">
                  <FontAwesome5 name="door-closed" size={16} color="#E3623C" />
                </Spacer>

                <BodyText>CLOSED</BodyText>
              </>
            )}
          </AvailabilityIconContainer>
          <Spacer position="bottom" size="medium" />
        </InfoContainer>
      </BlurView>
    </VenueCardContainer>
  );
};
