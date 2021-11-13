import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { SafeArea } from '../../../components/utilities/safe-area.component';
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/spacer.component';
import { sizesVal } from '../../../infrastructure/theme/sizes';
import DateTimePicker from 'react-native-modal-datetime-picker';

const AgendaTextInput = styled(TextInput)`
  width: ${(props) => props.theme.sizes[5]};
  height: ${(props) => props.theme.sizes[2]};
  background-color: white;
`;

const DateInputField = styled(View)`
  flex-direction: row;
`;

const DateText = styled(Text)`
  width: 50%;
  color: white;
`;

const EventPickerModalContainer = styled(Animated.View)`
  width: 80%;
  height: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  left: ${-Dimensions.get('window').width * 0.8}px;
  z-index: 1000;
`;

const Backdrop = styled(TouchableOpacity)`
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 900;
  opacity: 0.5;
`;

const EventPickerModal = ({ close }) => {
  const slideInStyle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideInStyle, {
      toValue: Dimensions.get('window').width * 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Backdrop onPress={close}></Backdrop>
      <EventPickerModalContainer
        style={{ transform: [{ translateX: slideInStyle }] }}
      >
        <Text style={{ color: 'white' }}>EventPicker</Text>
      </EventPickerModalContainer>
    </>
  );
};

export const AgendaFormScreen = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [isEventPickerVisible, setIsEventPickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showEventPicker = () => {
    setIsEventPickerVisible(true);
  };

  const hideEventPicker = () => {
    setIsEventPickerVisible(false);
  };

  const handleConfirm = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const d = date.getDate();
    const dateString = `${year}-${month}-${d}`;
    setDate(dateString);
    hideDatePicker();
  };

  const onSubmit = (data) => console.log(data);
  return (
    <SafeArea>
      {isEventPickerVisible && <EventPickerModal close={hideEventPicker} />}
      <Text style={{ color: 'white' }}>Form</Text>

      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <AgendaTextInput onBlur={onBlur} onChangeText={onChange} />
          )}
          name="title"
          defaultValue=""
        />
        <Spacer size="large" />
        <DateInputField>
          <DateText>{date}</DateText>
          <Button title="Show Date Picker" onPress={showDatePicker} />
        </DateInputField>
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View>
          <Button title="Pick Event" onPress={showEventPicker} />
        </View>

        <Button title="Create" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeArea>
  );
};
