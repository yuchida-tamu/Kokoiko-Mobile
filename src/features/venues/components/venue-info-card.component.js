import React from "react";
import { TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { Card } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
//components
import {
  VenueCardContainer,
  InfoContainer,
  Row,
  Title,
  IconHeart,
  BodyText,
  AvailabilityIconContainer,
} from "../components/venues-styles.component";
import { Divider } from "../../../components/utilities/divider.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const VenueInfoCard = (venue = {}) => {
  const {
    name = "Sample Gallery",
    address = "1600 sample street",
    rating = 4.5,
    photos = [
      "https://www.wantedinrome.com/i/preview/storage/uploads/2020/12/Galleria_Varsi.jpg",
    ],
    isOpen = true,
    placeId,
  } = venue;
  return (
    <VenueCardContainer elevation={15}>
      <BlurView intensity={75} tint="dark">
        <Card.Cover source={{ uri: photos[0] }} />
        <InfoContainer>
          <Row>
            <Title>{name}</Title>
            <TouchableOpacity>
              <IconHeart />
            </TouchableOpacity>
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
