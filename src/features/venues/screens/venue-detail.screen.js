import React from 'react';
import { View, ScrollView } from 'react-native';
//component
import { SafeArea } from '../../../components/utilities/safe-area.component';
import { VenueInfoCard } from '../components/venue-info-card.component';
//infra
import { Spacer } from '../../../components/spacer/spacer.component';
//styled components
import {
  AccordionList,
  Description,
  DescriptionContainer,
  ListIcon,
  ListItem,
} from '../components/venue-detail-styles.component';

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
