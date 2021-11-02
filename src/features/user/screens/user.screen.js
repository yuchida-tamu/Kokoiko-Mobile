import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCallback } from 'react/cjs/react.development';
import { SafeArea } from '../../../components/utilities/safe-area.component';
import { UserContext } from '../../../services/user/user.context';
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Divider } from '../../../components/utilities/divider.component';

export const UserProfileContainer = styled(View)`
  width: 100%;
  height: ${(props) => props.theme.sizes[5]};
  align-items: center;
  justify-content: center;
`;

export const UserProfileImageWrapper = styled(View)`
    width: ${(props) => props.theme.sizes[4]}
    height: ${(props) => props.theme.sizes[4]}
    border-radius: 50;
    background-color: gray;
`;

export const UserProfileTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const UserListItemContainer = styled(TouchableOpacity)`
  width: 100%;
  height: ${(props) => props.theme.sizes[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const UserListItemText = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const UserScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);

  const navigateToFavouritesHandler = useCallback(() => {
    navigation.navigate('UserFavourites');
  }, []);

  return (
    <SafeArea>
      <UserProfileContainer>
        <UserProfileImageWrapper></UserProfileImageWrapper>
        <Spacer size="medium" />
        <UserProfileTitle>
          {user ? user.username : 'Yuta Uchida'}
        </UserProfileTitle>
      </UserProfileContainer>
      <Divider />
      <UserListItemContainer onPress={navigateToFavouritesHandler}>
        <View>
          <UserListItemText>Favourites</UserListItemText>
        </View>
      </UserListItemContainer>
      <UserListItemContainer>
        <View>
          <UserListItemText>Logout</UserListItemText>
        </View>
      </UserListItemContainer>
    </SafeArea>
  );
};
