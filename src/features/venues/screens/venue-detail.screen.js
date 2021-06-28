import React from "react";
import { View, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import { List } from "react-native-paper";
//component
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { VenueInfoCard } from "../components/venue-info-card.component";
import { Divider } from "../../../components/utilities/divider.component";
//infra
import { colors } from "../../../infrastructure/theme/colors";
import {
  fonts,
  fontSizes,
  fontWeights,
} from "../../../infrastructure/theme/fonts";
import { Spacer } from "../../../components/spacer/spacer.component";

const AccordionList = styled(List.Accordion).attrs({
  titleStyle: {
    color: colors.text.primary,
    fontFamily: fonts.heading,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  color: ${(props) => props.theme.colors.text.primary};
  width: 100%;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[0]};
`;

const DescriptionContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  height: ${(props) => props.theme.sizes[4]};
  width: ${(props) => props.theme.sizes[6]};
  padding-right: ${(props) => props.theme.space[4]};
  align-items: center;
`;

const Description = styled(Text)`
  color: ${(props) => props.theme.colors.text.muted};
`;

const ListItem = styled(List.Item).attrs({
  titleStyle: {
    color: colors.text.primary,
    fontFamily: fonts.body,
  },
  descriptionStyle: {
    color: colors.text.muted,
    fontSize: fontSizes.caption,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  color: ${(props) => props.theme.colors.text.primary};
`;

const ListIcon = styled(List.Icon).attrs({
  color: colors.ui.primary,
})``;

export const VenueDetailScreen = ({ route }) => {
  const { description, events, phone, email, website } = route.params.item;

  const eventListItems = events.map((event) => (
    <ListItem title={event.name} description={event.date} />
  ));

  return (
    <SafeArea>
      <View>
        <VenueInfoCard venue={route.params.item} />
        <ScrollView>
          <Spacer position="bottom" size="large" />
          <AccordionList
            title="About"
            left={(props) => <ListIcon {...props} icon="information-outline" />}
          >
            <DescriptionContainer>
              <Description>{description}</Description>
            </DescriptionContainer>
          </AccordionList>

          <AccordionList
            left={(props) => <ListIcon {...props} icon="calendar-outline" />}
            title="Events"
          >
            {eventListItems}
          </AccordionList>

          <AccordionList
            title="Contact"
            left={(props) => <ListIcon {...props} icon="phone-outline" />}
          >
            <ListItem title={phone} />
            <ListItem title={email} />
            <ListItem title={website} />
          </AccordionList>
          <Spacer position="bottom" size="large" />
        </ScrollView>
      </View>
    </SafeArea>
  );
};
