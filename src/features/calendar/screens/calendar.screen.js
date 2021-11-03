import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import styled from 'styled-components';
import { colors } from '../../../infrastructure/theme/colors';
import { Ionicons } from '@expo/vector-icons';

const CalendarSafeArea = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.bg['primary']};
`;

const CalendarNavigationContainer = styled(View)`
  height: ${(props) => props.theme.sizes[3]};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const CalendarNavigationTab = styled(TouchableOpacity)`
  height: 100%;
  width: ${(props) => props.theme.sizes[3]}
  justify-content: center;
  align-items: center;
`;

const CalendarNavigationDivider = styled(View)`
  height: 20%;
  width: 1px;
  background-color: ${(props) => props.theme.colors.text.primary};
`;

const CalendarNavigation = ({ scrollToCurrent }) => {
  return (
    <CalendarNavigationContainer>
      <CalendarNavigationDivider />
      <CalendarNavigationTab onPress={scrollToCurrent}>
        <View>
          <Ionicons name="today-outline" size={24} color={colors.text.muted} />
        </View>
      </CalendarNavigationTab>
      <CalendarNavigationDivider />
    </CalendarNavigationContainer>
  );
};

export const CalendarScreen = () => {
  const [current, setCurrent] = useState(new Date());
  const calendarRef = useRef(null);

  const scrollToCurrent = () => {
    calendarRef.current.scrollToMonth(current.toLocaleDateString);
  };

  return (
    <CalendarSafeArea>
      <CalendarNavigation scrollToCurrent={scrollToCurrent} />
      <CalendarList
        ref={calendarRef}
        style={{ height: '100%' }}
        horizontal
        pagingEnabled
        theme={{
          backgroundColor: colors.bg.primary,
          calendarBackground: colors.bg.primary,
          textSectionTitleColor: colors.ui.primary,
          todayTextColor: colors.ui.secondary,
          todayBackgroundColor: colors.bg.secondary,
          dayTextColor: colors.text.primary,
          monthTextColor: colors.text.primary,
          selectedDayBackgroundColor: colors.ui.success,
        }}
      />
    </CalendarSafeArea>
  );
};
