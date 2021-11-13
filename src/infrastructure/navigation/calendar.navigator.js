import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import { CalendarScreen } from '../../features/calendar/screens/calendar.screen';
import { AgendaScreen } from '../../features/calendar/screens/agenda.screen';
import { AgendaFormScreen } from '../../features/calendar/screens/agendata-form.screen';
import { VenuesScreen } from '../../features/venues/screens/venues.screen';
import { colors } from '../theme/colors';

const CalendarStack = createStackNavigator();

export const CalendarNavigator = () => {
  return (
    <CalendarStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.bg.primary },
      }}
    >
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
      <CalendarStack.Screen name="Agenda" component={AgendaScreen} />
      <CalendarStack.Screen name="AgendaForm" component={AgendaFormScreen} />
    </CalendarStack.Navigator>
  );
};
