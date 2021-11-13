import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { UserContext } from '../../../services/user/user.context';
import { CalendarNavigation } from './calendar.screen';
export const AgendaScreen = ({ route }) => {
  const {
    user: { calendar },
  } = useContext(UserContext);

  return (
    <>
      <CalendarNavigation scrollToCurrent={route.params.goBack} />
      <Agenda
        items={calendar}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={(month) => {
          console.log('trigger items loading');
        }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={(calendarOpened) => {
          console.log(calendarOpened);
        }}
        // Callback that gets called on day press
        onDayPress={(day) => {
          console.log('day pressed');
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={(day) => {
          console.log('day changed');
        }}
        // Initially selected day
        selected={route.params.selectedDate}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
          return <View />;
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />;
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <View />;
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return <View />;
        }}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        // Hide knob button. Default = false
        hideKnob={true}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={false}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        markedDates={{
          '2012-05-16': { selected: true, marked: true },
          '2012-05-17': { marked: true },
          '2012-05-18': { disabled: true },
        }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
        refreshControl={null}
      />
    </>
  );
};
